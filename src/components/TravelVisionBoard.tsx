import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Image as ImageIcon, Wand2, Loader2, Sparkles, Download } from 'lucide-react';

export default function TravelVisionBoard() {
  const [prompt, setPrompt] = useState('');
  const [imageSize, setImageSize] = useState('1K');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  
  const [editPrompt, setEditPrompt] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState('');

  const getAiInstance = () => {
    // @ts-ignore
    const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
    return new GoogleGenAI({ apiKey });
  };

  const handleGenerate = async () => {
    if (!prompt) return;
    setIsGenerating(true);
    setError('');
    try {
      const ai = getAiInstance();
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-image-preview',
        contents: {
          parts: [{ text: `A high quality travel photography of ${prompt}, USA travel context, realistic, cinematic lighting` }]
        },
        config: {
          // @ts-ignore
          imageConfig: {
            aspectRatio: "16:9",
            imageSize: imageSize
          }
        }
      });

      let foundImage = false;
      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          setGeneratedImage(`data:${part.inlineData.mimeType};base64,${part.inlineData.data}`);
          foundImage = true;
          break;
        }
      }
      if (!foundImage) setError('Não foi possível gerar a imagem. Tente outro prompt.');
    } catch (err: any) {
      console.error(err);
      if (err.message?.includes('Requested entity was not found')) {
         setError('Erro de API Key. Por favor, recarregue a página e selecione uma chave válida.');
      } else {
         setError(err.message || 'Erro ao gerar imagem.');
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const handleEdit = async () => {
    if (!editPrompt || !generatedImage) return;
    setIsEditing(true);
    setError('');
    try {
      const ai = getAiInstance();
      const base64Data = generatedImage.split(',')[1];
      const mimeType = generatedImage.split(';')[0].split(':')[1];

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            {
              inlineData: {
                data: base64Data,
                mimeType: mimeType,
              },
            },
            {
              text: editPrompt,
            },
          ],
        },
      });

      let foundImage = false;
      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          setGeneratedImage(`data:${part.inlineData.mimeType};base64,${part.inlineData.data}`);
          foundImage = true;
          break;
        }
      }
      if (!foundImage) setError('Não foi possível editar a imagem.');
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Erro ao editar imagem.');
    } finally {
      setIsEditing(false);
    }
  };

  return (
    <section id="vision-board" className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-blue-900/50 rounded-xl mb-4 text-blue-400">
            <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bônus: Visualize sua Viagem dos Sonhos
          </h2>
          <p className="text-lg text-slate-400">
            Descreva o lugar que você quer visitar nos EUA e nossa IA criará uma foto realista para o seu quadro de visualizações.
          </p>
        </div>

        <div className="bg-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-700">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Controls */}
            <div className="space-y-8">
              {/* Generate */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <ImageIcon className="w-5 h-5 text-blue-400" />
                  1. Gerar Destino
                </h3>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">O que você quer ver?</label>
                  <textarea 
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Ex: Times Square em Nova York à noite, com muitos letreiros luminosos..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 text-white placeholder:text-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none h-24"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-slate-400 mb-2">Qualidade</label>
                    <select 
                      value={imageSize}
                      onChange={(e) => setImageSize(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                    >
                      <option value="1K">Padrão (1K)</option>
                      <option value="2K">Alta (2K)</option>
                      <option value="4K">Ultra HD (4K)</option>
                    </select>
                  </div>
                  <button 
                    onClick={handleGenerate}
                    disabled={isGenerating || !prompt}
                    className="flex-1 mt-7 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 disabled:text-slate-500 text-white font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    {isGenerating ? <Loader2 className="w-5 h-5 animate-spin" /> : <Wand2 className="w-5 h-5" />}
                    {isGenerating ? 'Gerando...' : 'Gerar Imagem'}
                  </button>
                </div>
              </div>

              {/* Edit */}
              <div className={`space-y-4 pt-8 border-t border-slate-700 transition-opacity ${generatedImage ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}>
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  2. Editar Imagem
                </h3>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">O que deseja alterar?</label>
                  <div className="flex gap-2">
                    <input 
                      type="text"
                      value={editPrompt}
                      onChange={(e) => setEditPrompt(e.target.value)}
                      placeholder="Ex: Adicionar um filtro retrô, remover pessoas do fundo..."
                      className="flex-1 bg-slate-900 border border-slate-700 rounded-xl p-3 text-white placeholder:text-slate-600 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    <button 
                      onClick={handleEdit}
                      disabled={isEditing || !editPrompt || !generatedImage}
                      className="bg-slate-700 hover:bg-slate-600 disabled:bg-slate-800 disabled:text-slate-600 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
                    >
                      {isEditing ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Aplicar'}
                    </button>
                  </div>
                </div>
              </div>

              {error && (
                <div className="p-4 bg-red-900/30 border border-red-800 rounded-xl text-red-400 text-sm">
                  {error}
                </div>
              )}
            </div>

            {/* Preview */}
            <div className="bg-slate-900 rounded-2xl border border-slate-700 flex items-center justify-center overflow-hidden min-h-[300px] relative group">
              {generatedImage ? (
                <>
                  <img src={generatedImage} alt="Gerada por IA" className="w-full h-full object-contain" />
                  <a 
                    href={generatedImage} 
                    download="viagem-sonhos.png"
                    className="absolute bottom-4 right-4 bg-slate-900/80 hover:bg-blue-600 text-white p-3 rounded-full backdrop-blur-sm transition-colors opacity-0 group-hover:opacity-100"
                    title="Baixar imagem"
                  >
                    <Download className="w-5 h-5" />
                  </a>
                </>
              ) : (
                <div className="text-center p-8 text-slate-500">
                  <ImageIcon className="w-16 h-16 mx-auto mb-4 opacity-20" />
                  <p>Sua imagem aparecerá aqui</p>
                </div>
              )}
              {(isGenerating || isEditing) && (
                <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex flex-col items-center justify-center text-blue-400 z-10">
                  <Loader2 className="w-12 h-12 animate-spin mb-4" />
                  <p className="font-medium animate-pulse">
                    {isGenerating ? 'Criando sua viagem...' : 'Aplicando magia...'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

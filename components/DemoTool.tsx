
import React, { useState, useRef } from 'react';
import Button from './Button';
import { editImageWithGemini } from '../services/geminiService';

const DemoTool: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [mimeType, setMimeType] = useState<string>('');
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setMimeType(file.type);
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImage(base64String.split(',')[1]);
      };
      reader.readAsDataURL(file);
      setResult(null);
      setError(null);
    }
  };

  const handleEdit = async () => {
    if (!image || !prompt) return;
    setLoading(true);
    setError(null);
    try {
      const editedImageUrl = await editImageWithGemini(image, mimeType, prompt);
      if (editedImageUrl) {
        setResult(editedImageUrl);
      } else {
        setError("No se pudo procesar la imagen. Intenta con un prompt diferente.");
      }
    } catch (err: any) {
      setError("Error al conectar con la IA. Por favor, verifica tu conexión o API Key.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="demo" className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm max-w-4xl mx-auto my-16">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Prueba el poder de Adeed AI</h3>
        <p className="text-slate-600">Sube una imagen de tus reportes o entorno y usa IA para editarla visualmente (Ej: "Añade un filtro retro" o "Borra el fondo").</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Input Section */}
        <div className="space-y-4">
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-slate-300 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition-colors bg-white min-h-[200px]"
          >
            {image ? (
              <img 
                src={`data:${mimeType};base64,${image}`} 
                alt="Original" 
                className="max-h-[200px] rounded-lg shadow-sm"
              />
            ) : (
              <>
                <svg className="w-12 h-12 text-slate-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-slate-500 font-medium">Haz clic para subir una imagen</span>
              </>
            )}
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              className="hidden" 
              accept="image/*" 
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">¿Qué quieres hacer?</label>
            <input 
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ej: Añade un filtro retro o aclara la imagen..."
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>

          <Button 
            onClick={handleEdit} 
            disabled={loading || !image || !prompt} 
            fullWidth
            className={loading ? 'opacity-70 cursor-not-allowed' : ''}
          >
            {loading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Procesando...
              </span>
            ) : 'Generar Cambio con IA'}
          </Button>

          {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
        </div>

        {/* Result Section */}
        <div className="flex flex-col h-full">
          <div className="bg-slate-200 rounded-xl overflow-hidden flex-1 flex items-center justify-center min-h-[300px]">
            {result ? (
              <img src={result} alt="Edited Result" className="w-full h-full object-contain" />
            ) : (
              <div className="text-center p-6">
                <p className="text-slate-500 italic">El resultado de la IA aparecerá aquí</p>
              </div>
            )}
          </div>
          {result && (
            <div className="mt-4">
               <a 
                href={result} 
                download="adeed-edited.png"
                className="text-blue-600 font-semibold hover:underline flex items-center justify-center"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Descargar resultado
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DemoTool;

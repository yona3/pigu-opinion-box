import { useEffect, useState } from 'react';
import { Opinion } from '../models/Opinion';
// import  from "../img/frame.png";

const createTextLine = (
  ctx: CanvasRenderingContext2D,
  text: string
): {
  line: string;
  remaining: string;
} => {
  const maxWidth = 380 * 2;

  for (let i = 0; i < text.length; i++) {
    const line = text.substring(0, i + 1);

    if (ctx.measureText(line).width > maxWidth) {
      return {
        line,
        remaining: text.substring(i + 1),
      };
    }
  }

  return {
    line: text,
    remaining: '',
  };
};

const createTextLines = (
  ctx: CanvasRenderingContext2D,
  text: string
): string[] => {
  let lines = [];
  let currentText = text;

  while (currentText !== '') {
    const separatedText = createTextLine(ctx, currentText);

    lines = [...lines, separatedText.line];
    currentText = separatedText.remaining;
  }

  return lines;
};

export const useImage = (opinion: Opinion): { png: string } => {
  const [image, setImage] = useState<HTMLImageElement>(null);
  const [png, setPng] = useState<string>(null);

  useEffect(() => {
    if (image) return;

    // 画像生成
    const imageEl = new Image();
    imageEl.src = '/frame.png';
    imageEl.onload = () => setImage(imageEl);
  }, []);

  useEffect(() => {
    if (!image || !opinion || png) return;
    const canvasEl = document.createElement('canvas');

    const width = 600 * 2;
    const height = 315 * 2;

    canvasEl.width = width;
    canvasEl.height = height;

    const ctx = canvasEl.getContext('2d');

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#888888';
    ctx.fillRect(0, 0, width, height);
    if (image) ctx.drawImage(image, 0, 0, width, height);

    ctx.font =
      '45px "ヒラギノ丸ゴ Pro W4","ヒラギノ丸ゴ Pro","Hiragino Maru Gothic Pro","ヒラギノ角ゴ Pro W3","Hiragino Kaku Gothic Pro","HG丸ｺﾞｼｯｸM-PRO","HGMaruGothicMPRO"';
    ctx.fillStyle = 'black';

    if (image) {
      const lines = createTextLines(ctx, opinion.body);

      lines.length === 1
        ? (ctx.textAlign = 'center')
        : (ctx.textAlign = 'left');
      ctx.textBaseline = 'middle';

      lines.forEach((line, index) => {
        const y = 157 + 40 * (index - (lines.length - 1) / 2);
        lines.length === 1
          ? ctx.fillText(line, 300 * 2, y * 2)
          : ctx.fillText(line, 100 * 2, y * 2);
      });

      if (setPng) setPng(canvasEl.toDataURL());
    }
  }, [image]);

  return { png };
};

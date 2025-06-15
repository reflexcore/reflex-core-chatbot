import { metadataMap } from './metadata';

export function generateReflexResponse(message: string, metadata: any): string {
  const key = `${metadata.role}-${metadata.industry}-${metadata.level}`;
  const context = metadataMap[key] || 'Không tìm thấy thông tin phù hợp.';
  return `📌 Theo ngữ cảnh: [${key}]
→ ${context}

👉 Trả lời cho: "${message}"`;
}
"use client"

import React, { useEffect } from "react"
import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

interface OutputEditorProps {
  content: string;
}

const OutputEditor = ({ content }: OutputEditorProps) => {
  // Converts text into markdown bullet points
  const formatAsMarkdownBullets = (text: string): string => {
    const lines = text
      .split("\n")
      .map(line => line.trim())
      .filter(line => line.length > 0);

    return lines.map(line => `- ${line}`).join("\n");
  };

  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
    editable: false,
    immediatelyRender: false, // 👈 FIX for SSR hydration issue
  });

  useEffect(() => {
    if (editor && content) {
      const markdown = formatAsMarkdownBullets(content);
      editor.commands.setContent(markdown.replace(/^- /gm, "• "));
    }
  }, [content, editor]);

  return (
    <div className="editor-wrapper border rounded-lg p-2 bg-white shadow">
      <EditorContent editor={editor} />
    </div>
  );
};

export default OutputEditor;

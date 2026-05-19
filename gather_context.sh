#!/bin/bash

# Define the output file
OUTPUT_FILE="astro_project_context.md"

echo "✨ Initializing contextual canvas..."
echo "# BioPortal Astro Architectural Context" > "$OUTPUT_FILE"
echo "Generated on: $(date)" >> "$OUTPUT_FILE"
echo -e "\n---\n" >> "$OUTPUT_FILE"

# 1. Generate Folder Structure
echo "📁 Mapping folder hierarchy..."
echo "## 📂 Project Directory Structure" >> "$OUTPUT_FILE"
echo '```text' >> "$OUTPUT_FILE"

# Use tree if available, fallback to a clean find command if it isn't
if command -v tree &> /dev/null; then
    tree -I 'node_modules|.git|dist|.astro|public|.github' >> "$OUTPUT_FILE"
else
    find . -not -path '*/.*' \
           -not -path './node_modules*' \
           -not -path './dist*' \
           -not -path './public*' \
           -not -path './.astro*' \
           | sort | sed 's|^\./||' | sed -e 's/[^*\/]*\//    /g' >> "$OUTPUT_FILE"
fi

echo '```' >> "$OUTPUT_FILE"
echo -e "\n---\n" >> "$OUTPUT_FILE"

# 2. Gather Configuration & Schema Files
echo "⚙️ Extracting core configurations..."
echo "## ⚙️ Core Configurations & Schemas" >> "$OUTPUT_FILE"

config_files=(
    "package.json"
    "astro.config.mjs"
    "astro.config.ts"
    "astro.config.js"
    "tsconfig.json"
    "src/content.config.ts"
    "src/content/config.ts"
)

for file in "${config_files[@]}"; do
    if [ -f "$file" ]; then
        echo "   📄 Adding $file..."
        echo "### 📄 File: \`$file\`" >> "$OUTPUT_FILE"

        # Determine language for markdown syntax highlighting
        ext="${file##*.}"
        if [ "$ext" = "json" ]; then lang="json"; else lang="typescript"; fi

        echo "\`\`\`$lang" >> "$OUTPUT_FILE"
        cat "$file" >> "$OUTPUT_FILE"
        echo -e "\n\`\`\`\n" >> "$OUTPUT_FILE"
    fi
done

echo -e "---\n" >> "$OUTPUT_FILE"

# 3. Gather Component and Styling Architecture
echo "🎨 Extracting structural source files (Astro, CSS)..."
echo "## 🏗️ Structural Layouts, Pages, Components & Styles" >> "$OUTPUT_FILE"

# Find structural files while safely avoiding raw content data (md, yaml, yml)
find src/pages src/layouts src/components src/styles -type f \( -name "*.astro" -o -name "*.css" -o -name "*.ts" -o -name "*.js" \) 2>/dev/null | while read -r file; do
    echo "   🧩 Adding $file..."
    echo "### 🧩 File: \`$file\`" >> "$OUTPUT_FILE"

    ext="${file##*.}"
    echo "\`\`\`$ext" >> "$OUTPUT_FILE"
    cat "$file" >> "$OUTPUT_FILE"
    echo -e "\n\`\`\`\n" >> "$OUTPUT_FILE"
done

echo "✅ Context assembly complete! Captured ecosystem inside: $OUTPUT_FILE"

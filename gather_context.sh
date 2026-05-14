#!/bin/bash

# Define the output file
OUTPUT_FILE="project_context.txt"

# Clear the output file if it exists
> "$OUTPUT_FILE"

echo "Generating project context into $OUTPUT_FILE..."

# 1. Generate the File Structure (Tree)
echo "--- PROJECT STRUCTURE ---" >> "$OUTPUT_FILE"
if command -v tree >/dev/null 2>&1; then
    # Use tree if installed, ignoring heavy folders
    tree -I 'node_modules|.git|dist|.astro' >> "$OUTPUT_FILE"
else
    # Fallback to find if tree isn't installed
    find . -maxdepth 3 -not -path '*/.*' -not -path './node_modules*' -not -path './dist*' >> "$OUTPUT_FILE"
fi

echo -e "\n--- FILE CONTENTS ---\n" >> "$OUTPUT_FILE"

# 2. List File Names and Contents
# We specifically target Astro, TS, JS, YAML, MD, and Config files
find . -type f \
    \( -name "*.astro" -o -name "*.ts" -o -name "*.mjs" -o -name "*.yaml" -o -name "*.md" -o -name "*.css" \) \
    -not -path "*/node_modules/*" \
    -not -path "*/dist/*" \
    -not -path "*/.astro/*" \
    -not -path "*/.git/*" | while read -r file; do
        echo "================================================" >> "$OUTPUT_FILE"
        echo "FILE: $file" >> "$OUTPUT_FILE"
        echo "================================================" >> "$OUTPUT_FILE"
        cat "$file" >> "$OUTPUT_FILE"
        echo -e "\n\n" >> "$OUTPUT_FILE"
    done

echo "Done! You can now upload or copy-paste $OUTPUT_FILE."

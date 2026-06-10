#!/bin/bash

# Configuration
SOURCE_DIR="src/content/en"
OUTPUT_FILE="english_translation_dump.txt"

# Initialize output file with metadata header
echo "# BioPortal Source Content Translation Dump" > "$OUTPUT_FILE"
echo "Generated on: $(date)" >> "$OUTPUT_FILE"
echo "Base Directory: $SOURCE_DIR" >> "$OUTPUT_FILE"
echo "----------------------------------------" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

# Verify source directory exists
if [ ! -d "$SOURCE_DIR" ]; then
    echo "Error: Source directory '$SOURCE_DIR' not found."
    exit 1
fi

echo "Scanning $SOURCE_DIR for content files..."

# Counter for tracking found files
file_count=0

# Recursively locate YAML and Markdown files
find "$SOURCE_DIR" -type f \( -name "*.yaml" -o -name "*.yml" -o -name "*.md" \) | sort | while read -r file; do
    echo "Processing: $file"
    
    # Append structured headers and content boundaries
    echo "=== START_FILE: $file ===" >> "$OUTPUT_FILE"
    cat "$file" >> "$OUTPUT_FILE"
    echo "" >> "$OUTPUT_FILE" # Ensure trailing newline
    echo "=== END_FILE: $file ===" >> "$OUTPUT_FILE"
    echo "" >> "$OUTPUT_FILE"
    
    ((file_count++))
done

echo "----------------------------------------"
echo "Success! Aggregated $file_count files into '$OUTPUT_FILE'."
echo "You can now pass this text file over for translation."

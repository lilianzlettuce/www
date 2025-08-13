#!/bin/bash

INPUT_DIR="../public/projects"

# Check if input directory exists
if [ ! -d "$INPUT_DIR" ]; then
    echo "Error: Input directory $INPUT_DIR does not exist"
    exit 1
fi

# Process each file in the input directory
for file in "$INPUT_DIR"/*; do
    # Skip if not a file or if it's a directory
    if [ ! -f "$file" ]; then
        continue
    fi
    
    filename=$(basename -- "$file")
    
    # Extract project name and image suffix using regex
    # Pattern: projectNamepic_ or projectName_ where _ is a digit (no underscore delimiter)
    if [[ $filename =~ ^(.+)(pic[0-9]+|[0-9]+)\.([a-zA-Z]+)$ ]]; then
        project_name="${BASH_REMATCH[1]}"
        image_suffix="${BASH_REMATCH[2]}"
        extension="${BASH_REMATCH[3]}"
        
        # Create project directory
        project_dir="$INPUT_DIR/$project_name"
        mkdir -p "$project_dir"
        
        # New filename with extension
        new_filename="${image_suffix}.${extension}"
        
        # Move and rename the file
        mv "$file" "$project_dir/$new_filename"
        
        echo "Moved $filename -> $project_name/$new_filename"
    else
        echo "Skipping $filename (doesn't match expected pattern)"
    fi
done

echo "Image organization complete!" 
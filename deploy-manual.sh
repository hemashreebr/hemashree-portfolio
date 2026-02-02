#!/bin/bash

# Manual deployment script for GitHub Pages
echo "🚀 Starting manual deployment..."

# Build the project
echo "📦 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Static files generated in 'out' directory"
    echo ""
    echo "🌐 Manual deployment options:"
    echo "1. Upload 'out' folder to Netlify (drag & drop)"
    echo "2. Upload 'out' folder to Vercel"
    echo "3. Use GitHub Desktop to commit and push"
    echo ""
    echo "📋 Files ready for deployment:"
    ls -la out/
else
    echo "❌ Build failed!"
    exit 1
fi
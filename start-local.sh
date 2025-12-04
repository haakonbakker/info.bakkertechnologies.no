#!/bin/bash

# Script to run Jekyll site locally for GitHub Pages

set -e  # Exit on error

echo "🚀 Starting Jekyll local development server..."
echo ""

# Check if Ruby is installed
if ! command -v ruby &> /dev/null; then
    echo "❌ Error: Ruby is not installed."
    echo "   Please install Ruby first: https://www.ruby-lang.org/en/downloads/"
    exit 1
fi

# Check if Bundler is installed
if ! command -v bundle &> /dev/null; then
    echo "📦 Bundler not found. Installing Bundler..."
    gem install bundler
fi

# Install dependencies if Gemfile.lock doesn't exist or Gemfile is newer
if [ ! -f "Gemfile.lock" ] || [ "Gemfile" -nt "Gemfile.lock" ]; then
    echo "📦 Installing dependencies..."
    bundle install
else
    echo "✅ Dependencies are up to date"
fi

echo ""
echo "🌐 Starting Jekyll server..."
echo "   The site will be available at: http://localhost:4000"
echo "   Press Ctrl+C to stop the server"
echo ""

# Start Jekyll server
bundle exec jekyll serve --livereload

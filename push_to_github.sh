#!/bin/bash
# Script to push code to GitHub
# Replace REPO_NAME with your actual repository name

REPO_NAME="learning"  # Change this to your repository name if different
GITHUB_USER="ksh29-coder"

echo "Setting up remote repository..."
git remote add origin https://github.com/${GITHUB_USER}/${REPO_NAME}.git

echo "Setting branch to main..."
git branch -M main

echo "Pushing to GitHub..."
git push -u origin main

echo "Done! Your code is now on GitHub at:"
echo "https://github.com/${GITHUB_USER}/${REPO_NAME}"


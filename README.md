# Gaming Hub Blog

A modern, Marketer Milk-inspired gaming blog website with Facebook Ad policy compliance.

## 🎮 Features

- **Modern Design**: Clean, professional layout inspired by Marketer Milk
- **5 Unique Blog Posts**: AI-generated content about online gaming
- **Photorealistic Images**: Unique images for each post using Gemini 2.5 Flash Image
- **Author Profile**: Custom author image and bio
- **Full Navigation**: About, Contact, Privacy Policy, Terms & Conditions
- **Cookie Consent Banner**: GDPR-compliant cookie banner
- **Responsive Design**: Mobile-friendly layout
- **Facebook Ad Compliant**: No gambling, casino, or real-money gaming content

## 📁 Project Structure

```
gaming-hub-blog/
├── index.html              # Homepage with featured and recent posts
├── about.html              # About page
├── contact.html            # Contact page
├── privacy.html            # Privacy Policy
├── terms.html              # Terms & Conditions
├── blog/                   # Blog posts directory
│   ├── index.html         # Blog listing page
│   └── [post-slug].html   # Individual blog posts
├── images/                 # All images
│   ├── author.png         # Author profile image
│   └── [post-slug].png    # Blog post images
├── css/                    # Stylesheets
│   └── style.css         # Main stylesheet
└── js/                     # JavaScript files
    └── main.js           # Cookie banner functionality
```

## 🚀 Generation Process

### Step 1: Generate Content
```bash
node generate-content.js
```
Generates:
- 5 unique blog posts
- Blog post titles and content
- Meta descriptions
- Image prompts
- Author bio
- Saves to `content.json`

### Step 2: Generate Images
```bash
python generate-images.py
```
Generates:
- Author profile image
- 5 unique photorealistic blog post images
- Saves to `images/` directory

### Step 3: Build Website
```bash
node build-site.js
```
Builds:
- Homepage with blog feed
- Blog index page
- Individual blog post pages
- About, Contact, Privacy, Terms pages
- CSS and JavaScript files

### Step 4: Preview
```bash
npx http-server . -p 3001 -o
```

## 🎨 Design Features

- **Typography**: System fonts (similar to Marketer Milk)
- **Color Scheme**: Professional blue/purple gradient accents
- **Layout**: Card-based design with hover effects
- **Featured Post**: Large hero-style featured article
- **Blog Cards**: Grid layout with images and metadata
- **Author Box**: Profile section on each blog post
- **Navigation**: Clean header with CTA button
- **Footer**: Simple footer with links

## ✅ Facebook Ad Compliance

- ✅ No gambling content
- ✅ No casino or real-money gaming
- ✅ Family-friendly content
- ✅ Clear privacy policy
- ✅ Terms and conditions
- ✅ Cookie consent banner
- ✅ Educational and informative content

## 📝 Blog Topics

1. Best multiplayer games to play with friends in 2025
2. How to improve your gaming skills: A complete guide
3. The rise of mobile gaming: Trends and insights
4. Building a gaming community: Tips for streamers
5. Family-friendly online games everyone can enjoy

## 🔧 Requirements

- Node.js (for content generation and site building)
- Python 3 (for image generation)
- Google API Key (Gemini 2.5 Flash)

## 📦 Dependencies

### Node.js
- @google/generative-ai
- dotenv

### Python
- google-genai
- python-dotenv

## ⚙️ Configuration

Create a `.env` file with your Google API key:
```
GOOGLE_API_KEY=your_api_key_here
```

## 🎯 Status

- ✅ Project structure created
- 🔄 Content generation in progress
- ⏳ Image generation pending
- ⏳ Website build pending

## 📧 Contact

Gaming Hub - Your ultimate destination for gaming insights

---

**Note**: This is a demonstration project showcasing AI-powered website generation with Facebook Ad policy compliance.


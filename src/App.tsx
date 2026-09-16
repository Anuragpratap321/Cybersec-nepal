import React, { useState } from 'react';
import {
  FEATURED_ARTICLES as ARTICLES,
  TOPIC_TRACKS as TOPICS_DATA,
  VIDEOS,
  NEWS_ITEMS,
  GLOSSARY_TERMS,
  ROADMAP_LEVELS,
} from './data/cybersecData';
import { Article, VideoItem, NewsItem, GlossaryTerm, ResourceToolkitItem, RoadmapLevel } from './types';

import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturedContent } from './components/FeaturedContent';
import { TopicsSection } from './components/TopicsSection';
import { VideoSection } from './components/VideoSection';
import { CyberNewsSection } from './components/CyberNewsSection';
import { AttackDefendSection } from './components/AttackDefendSection';
import { GlossarySection } from './components/GlossarySection';
import { ResourcesSection } from './components/ResourcesSection';
import { RoadmapSection } from './components/RoadmapSection';
import { AboutSection } from './components/AboutSection';
import { SocialSection } from './components/SocialSection';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';

// Modals
import { ArticleModal } from './components/ArticleModal';
import { VideoModal } from './components/VideoModal';
import { SearchModal } from './components/SearchModal';
import { PrivacyChecklistModal } from './components/PrivacyChecklistModal';
import { FollowUsModal } from './components/FollowUsModal';
import { ResourceDetailModal } from './components/ResourceDetailModal';

export default function App() {
  // Modal States
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [selectedResource, setSelectedResource] = useState<ResourceToolkitItem | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isPrivacyChecklistOpen, setIsPrivacyChecklistOpen] = useState(false);
  const [isFollowUsOpen, setIsFollowUsOpen] = useState(false);

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Convert news items to article modal view if requested
  const handleSelectNews = (news: NewsItem) => {
    const syntheticArticle: Article = {
      id: news.id,
      title: news.headline,
      excerpt: news.summary,
      category: news.category,
      readingTime: '3 min read',
      date: news.date,
      author: {
        name: 'CyberSec Nepal Intelligence Unit',
        role: 'Threat Verification Desk',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      },
      thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
      content: news.fullStory || [news.summary],
      keyTakeaways: [
        `Impact Rating: ${news.impactLevel}`,
        `Verified Origin: ${news.source}`,
        'Regularly patch connected software and monitor official Nepal CERT bulletins.',
      ],
      tags: ['SecurityAdvisory', news.category.replace(/\s+/g, ''), 'ThreatIntel'],
      source: news.source,
    };
    setSelectedArticle(syntheticArticle);
  };

  const handleStartJourney = (level: RoadmapLevel) => {
    // Open the roadmap guide / resources or navigate smoothly
    handleNavigate('roadmap');
  };

  return (
    <div className="min-h-screen bg-[#06080d] text-slate-100 selection:bg-blue-600 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Sticky Navigation */}
      <Navbar
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenFollowUs={() => setIsFollowUsOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section with Interactive Canvas */}
        <HeroSection
          onExploreContent={() => handleNavigate('featured')}
          onStartRoadmap={() => handleNavigate('roadmap')}
        />

        {/* 2. Featured Content (Editorial 3-Card Layout) */}
        <FeaturedContent
          articles={ARTICLES}
          onSelectArticle={(article) => setSelectedArticle(article)}
        />

        {/* 3. Topics Section (5 Core Pillars with Interactive Drawer) */}
        <TopicsSection
          topics={TOPICS_DATA}
          onSelectTopicArticle={(article) => setSelectedArticle(article)}
        />

        {/* 4. Video Section (Educational Visual Dives) */}
        <VideoSection
          videos={VIDEOS}
          onSelectVideo={(video) => setSelectedVideo(video)}
        />

        {/* 5. Cyber News (Live Advisory Dispatches) */}
        <CyberNewsSection
          newsItems={NEWS_ITEMS}
          onSelectNews={handleSelectNews}
        />

        {/* 6. "How Hackers Think" (Attack vs. Defend Dual Perspective) */}
        <AttackDefendSection />

        {/* 7. Cybersecurity Glossary ("Without the Jargon") */}
        <GlossarySection
          onSelectTermModal={(term) => {
            // Can open search or highlight term
            setIsSearchOpen(true);
          }}
        />

        {/* 8. Resources & Toolkit (Checklists & Blueprints) */}
        <ResourcesSection
          onOpenPrivacyChecklist={() => setIsPrivacyChecklistOpen(true)}
          onSelectResource={(res) => setSelectedResource(res)}
          onNavigateToRoadmap={() => handleNavigate('roadmap')}
        />

        {/* 9. Cybersecurity Roadmap (4-Stage Progressive Syllabus) */}
        <RoadmapSection onStartJourney={handleStartJourney} />

        {/* 10. About Section (Mission: Educate, Create Awareness, Build a Safer Nepal) */}
        <AboutSection />

        {/* 11. Social Media Section (Stay One Step Ahead CTA) */}
        <SocialSection />

        {/* 12. Newsletter Section (Minimalist Weekly Briefing) */}
        <NewsletterSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Modals & Overlays */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        articles={ARTICLES}
        videos={VIDEOS}
        news={NEWS_ITEMS}
        glossary={GLOSSARY_TERMS}
        onSelectArticle={(article) => setSelectedArticle(article)}
        onSelectVideo={(video) => setSelectedVideo(video)}
        onSelectNews={handleSelectNews}
      />

      <PrivacyChecklistModal
        isOpen={isPrivacyChecklistOpen}
        onClose={() => setIsPrivacyChecklistOpen(false)}
      />

      <FollowUsModal
        isOpen={isFollowUsOpen}
        onClose={() => setIsFollowUsOpen(false)}
      />

      <ResourceDetailModal
        resource={selectedResource}
        onClose={() => setSelectedResource(null)}
      />
    </div>
  );
}

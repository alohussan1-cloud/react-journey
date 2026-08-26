import React from 'react'
import Navbar from './components/Section1/navbar'
import FeatureIns from './components/Section2/featureIns'
import FilterSection from './components/section3/FilterSection'

const App = () => {
  const categoryCards = [
  {
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&auto=format&fit=crop&q=60",
    title: "Maximizing your marketing ROI",
    description:
      "Learn how to improve your marketing strategy and get better results from your campaigns.",
    authorImage:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=60",
    author: "Ryan Toriff",
    date: "05 Feb 2022",
    readTime: "7 mins read",
  },

  {
    image:
      "https://plus.unsplash.com/premium_photo-1661284937039-4d00e054d9cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVzaW5lc3MlMjBtYW58ZW58MHx8MHx8fDA%3D",
    title: "Building resilence in business",
    description:
      "Discover practical strategies that can help your business grow and stay ahead of competitors.",
    authorImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60",
    author: "James Wilson",
    date: "12 Feb 2022",
    readTime: "6 mins read",
  },

  {
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format&fit=crop&q=60",
    title: "The future of digital marketing",
    description:
      "Explore the latest digital marketing trends and how businesses can use them to grow.",
    authorImage:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVzaW5lc3MlMjBtYW58ZW58MHx8MHx8fDA%3D",
    author: "Sophia Miller",
    date: "18 Feb 2022",
    readTime: "8 mins read",
  },

  {
    image:
      "https://plus.unsplash.com/premium_photo-1682436594687-922216809102?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVzaW5lc3MlMjBtYW58ZW58MHx8MHx8fDA%3D",
    title: "How to build a strong team",
    description:
      "A strong team can transform your business. Learn how to find and manage the right people.",
    authorImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60",
    author: "Daniel Carter",
    date: "25 Feb 2022",
    readTime: "5 mins read",
  },

  {
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&auto=format&fit=crop&q=60",
    title: "Understanding your target audience",
    description:
      "Knowing your customers is essential for creating products and marketing campaigns that work.",
    authorImage:
      "https://images.unsplash.com/photo-1652471943570-f3590a4e52ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1c2luZXNzJTIwbWFufGVufDB8fDB8fHww",
    author: "Emma Johnson",
    date: "03 Mar 2022",
    readTime: "9 mins read",
  },

  {
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&auto=format&fit=crop&q=60",
    title: "Creating a productive workspace",
    description:
      "Small changes to your workspace can improve focus, creativity, and overall productivity.",
    authorImage:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60",
    author: "Michael Brown",
    date: "10 Mar 2022",
    readTime: "4 mins read",
  },

  {
    image:
      "https://images.unsplash.com/photo-1541535881962-3bb380b08458?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1c2luZXNzJTIwbWFufGVufDB8fDB8fHww",
    title: "Growing your online presence",
    description:
      "Use social media and digital platforms to build a recognizable and trustworthy brand.",
    authorImage:
      "https://images.unsplash.com/photo-1613181013804-1dcba09e6a9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJ1c2luZXNzJTIwbWFufGVufDB8fDB8fHww",
    author: "Olivia Taylor",
    date: "17 Mar 2022",
    readTime: "6 mins read",
  },

  {
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&auto=format&fit=crop&q=60",
    title: "Building resilence in business",
    description:
      "Learn important leadership principles that every entrepreneur should understand.",
    authorImage:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=600&auto=format&fit=crop&q=60",
    author: "Alex Morgan",
    date: "24 Mar 2022",
    readTime: "10 mins read",
  },
];
  return (
    <div className='px-2'>
      <Navbar/>
      <FeatureIns/>
      <FilterSection categoryCards= {categoryCards} />
    </div>
  )
}

export default App

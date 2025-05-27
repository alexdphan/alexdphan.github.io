"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface MediaItem {
  id: number;
  type: 'photo' | 'video';
  url: string;
  thumbnail: string;
  videoUrl?: string;
}

export const MediaScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const thumbnailRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement }>({});
  const ignoreNextClickRef = useRef(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isThumbnailDragging, setIsThumbnailDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [thumbnailStartX, setThumbnailStartX] = useState(0);
  const [thumbnailScrollLeft, setThumbnailScrollLeft] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  // Constants
  const ITEM_WIDTH = 400;
  const ITEM_GAP = 16;
  const THUMBNAIL_WIDTH = 56;
  const THUMBNAIL_GAP = 4;

  // Media items
  const mediaItems: MediaItem[] = [
    {
      id: 1,
      type: 'video',
      url: 'https://pub-825a8c4ad8dc4097833a60b3dcf2a446.r2.dev/patrick.mp4',
      videoUrl: 'https://pub-825a8c4ad8dc4097833a60b3dcf2a446.r2.dev/patrick.mp4',
      thumbnail: 'https://pub-825a8c4ad8dc4097833a60b3dcf2a446.r2.dev/patrick.mp4',
    },
    {
      id: 2,
      type: 'video',
      url: 'https://pub-825a8c4ad8dc4097833a60b3dcf2a446.r2.dev/screens.mp4',
      videoUrl: 'https://pub-825a8c4ad8dc4097833a60b3dcf2a446.r2.dev/screens.mp4',
      thumbnail: 'https://pub-825a8c4ad8dc4097833a60b3dcf2a446.r2.dev/screens.mp4',
    },
    {
      id: 3,
      type: 'video',
      url: 'https://pub-825a8c4ad8dc4097833a60b3dcf2a446.r2.dev/ocean.mp4',
      videoUrl: 'https://pub-825a8c4ad8dc4097833a60b3dcf2a446.r2.dev/ocean.mp4',
      thumbnail: 'https://pub-825a8c4ad8dc4097833a60b3dcf2a446.r2.dev/ocean.mp4',
    },
    {
      id: 4,
      type: 'video',
      url: 'https://pub-825a8c4ad8dc4097833a60b3dcf2a446.r2.dev/oceandog.mp4',
      videoUrl: 'https://pub-825a8c4ad8dc4097833a60b3dcf2a446.r2.dev/oceandog.mp4',
      thumbnail: 'https://pub-825a8c4ad8dc4097833a60b3dcf2a446.r2.dev/oceandog.mp4',
    },
    {
      id: 5,
      type: 'photo',
      url: 'https://via.placeholder.com/600x600/FF6B6B/FFFFFF?text=Photo+5',
      thumbnail: 'https://via.placeholder.com/150x150/FF6B6B/FFFFFF?text=5',
    },
    {
      id: 6,
      type: 'photo',
      url: 'https://via.placeholder.com/600x600/4ECDC4/FFFFFF?text=Photo+6',
      thumbnail: 'https://via.placeholder.com/150x150/4ECDC4/FFFFFF?text=6',
    },
    {
      id: 7,
      type: 'photo',
      url: 'https://via.placeholder.com/600x600/45B7D1/FFFFFF?text=Photo+7',
      thumbnail: 'https://via.placeholder.com/150x150/45B7D1/FFFFFF?text=7',
    },
    {
      id: 8,
      type: 'photo',
      url: 'https://via.placeholder.com/600x600/F7DC6F/FFFFFF?text=Photo+8',
      thumbnail: 'https://via.placeholder.com/150x150/F7DC6F/FFFFFF?text=8',
    },
    {
      id: 9,
      type: 'photo',
      url: 'https://via.placeholder.com/600x600/BB8FCE/FFFFFF?text=Photo+9',
      thumbnail: 'https://via.placeholder.com/150x150/BB8FCE/FFFFFF?text=9',
    },
    {
      id: 10,
      type: 'photo',
      url: 'https://via.placeholder.com/600x600/85C1E2/FFFFFF?text=Photo+10',
      thumbnail: 'https://via.placeholder.com/150x150/85C1E2/FFFFFF?text=10',
    },
    {
      id: 11,
      type: 'photo',
      url: 'https://via.placeholder.com/600x600/F8C471/FFFFFF?text=Photo+11',
      thumbnail: 'https://via.placeholder.com/150x150/F8C471/FFFFFF?text=11',
    },
    {
      id: 12,
      type: 'photo',
      url: 'https://via.placeholder.com/600x600/82E0AA/FFFFFF?text=Photo+12',
      thumbnail: 'https://via.placeholder.com/150x150/82E0AA/FFFFFF?text=12',
    },
  ];

  // Handle video playback
  useEffect(() => {
    // Pause all videos
    Object.values(videoRefs.current).forEach(video => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });

    // Play current video if it exists
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo && mediaItems[currentIndex]?.type === 'video') {
      currentVideo.play().catch(err => {
        console.log('Autoplay prevented:', err);
      });
    }
  }, [currentIndex, mediaItems]);

  // Update muted state
  useEffect(() => {
    Object.values(videoRefs.current).forEach(video => {
      if (video) {
        video.muted = isMuted;
      }
    });
  }, [isMuted]);

  // Scroll to specific index
  const scrollToIndex = useCallback((index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const containerWidth = container.offsetWidth;
    const scrollPosition = index * containerWidth;
    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
    setCurrentIndex(index);
  }, []);

  // Handle scroll to detect current index
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current || isDragging) return;
      const container = scrollRef.current;
      const scrollPosition = container.scrollLeft;
      const containerWidth = container.offsetWidth;
      const index = Math.round(scrollPosition / containerWidth);
      const clampedIndex = Math.max(0, Math.min(index, mediaItems.length - 1));
      if (clampedIndex !== currentIndex) {
        setCurrentIndex(clampedIndex);
      }
    };
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, [currentIndex, isDragging, mediaItems.length]);

  // Sync thumbnail scroll position
  useEffect(() => {
    if (!thumbnailRef.current || isThumbnailDragging) return;
    
    const container = thumbnailRef.current;
    const containerWidth = container.offsetWidth;
    const itemTotalWidth = THUMBNAIL_WIDTH + THUMBNAIL_GAP;
    const totalContentWidth = itemTotalWidth * mediaItems.length - THUMBNAIL_GAP;
    const scrollableWidth = Math.max(0, totalContentWidth - containerWidth);

    // Calculate target scroll to center the current thumbnail
    let targetScroll = (currentIndex * itemTotalWidth) - (containerWidth / 2) + (itemTotalWidth / 2);
    targetScroll = Math.max(0, Math.min(targetScroll, scrollableWidth));
    
    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  }, [currentIndex, mediaItems.length, isThumbnailDragging, THUMBNAIL_WIDTH, THUMBNAIL_GAP]);

  // Main carousel drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.touches[0].pageX - (scrollRef.current.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleDragEnd = () => {
    if (!isDragging || !scrollRef.current) return;
    setIsDragging(false);
    const container = scrollRef.current;
    const scrollPosition = container.scrollLeft;
    const containerWidth = container.offsetWidth;
    const targetIndex = Math.round(scrollPosition / containerWidth);
    const clampedIndex = Math.max(0, Math.min(targetIndex, mediaItems.length - 1));
    scrollToIndex(clampedIndex);
  };

  const handleThumbnailClick = (index: number) => {
    if (ignoreNextClickRef.current) {
      ignoreNextClickRef.current = false;
      return;
    }
    scrollToIndex(index);
  };

  // Thumbnail Drag Handlers
  const handleThumbnailMouseDown = (e: React.MouseEvent) => {
    if (!thumbnailRef.current) return;
    setIsThumbnailDragging(true);
    setThumbnailStartX(e.pageX - thumbnailRef.current.offsetLeft);
    setThumbnailScrollLeft(thumbnailRef.current.scrollLeft);
    if (thumbnailRef.current) thumbnailRef.current.style.scrollBehavior = 'auto';
    ignoreNextClickRef.current = false;
  };

  const handleThumbnailTouchStart = (e: React.TouchEvent) => {
    if (!thumbnailRef.current) return;
    setIsThumbnailDragging(true);
    setThumbnailStartX(e.touches[0].pageX - thumbnailRef.current.offsetLeft);
    setThumbnailScrollLeft(thumbnailRef.current.scrollLeft);
    if (thumbnailRef.current) thumbnailRef.current.style.scrollBehavior = 'auto';
    ignoreNextClickRef.current = false;
  };

  const handleThumbnailMouseMove = (e: React.MouseEvent) => {
    if (!isThumbnailDragging || !thumbnailRef.current) return;
    e.preventDefault();
    const x = e.pageX - thumbnailRef.current.offsetLeft;
    const walk = (x - thumbnailStartX) * 1;
    if (Math.abs(walk) > 2) {
        ignoreNextClickRef.current = true;
    }
    thumbnailRef.current.scrollLeft = thumbnailScrollLeft - walk;
  };

  const handleThumbnailTouchMove = (e: React.TouchEvent) => {
    if (!isThumbnailDragging || !thumbnailRef.current) return;
    const x = e.touches[0].pageX - thumbnailRef.current.offsetLeft;
    const walk = (x - thumbnailStartX) * 1;
    if (Math.abs(walk) > 2) {
        ignoreNextClickRef.current = true;
    }
    thumbnailRef.current.scrollLeft = thumbnailScrollLeft - walk;
  };

  const handleThumbnailDragEnd = () => {
    if (!thumbnailRef.current) return;
    setIsThumbnailDragging(false);
    thumbnailRef.current.style.scrollBehavior = 'smooth';

    const container = thumbnailRef.current;
    let currentScroll = container.scrollLeft;
    const containerWidth = container.offsetWidth;
    const itemTotalWidth = THUMBNAIL_WIDTH + THUMBNAIL_GAP;
    const totalContentWidth = itemTotalWidth * mediaItems.length - THUMBNAIL_GAP;
    const maxScroll = Math.max(0, totalContentWidth - containerWidth);

    // Bounce back effect
    if (currentScroll < 0) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
      currentScroll = 0;
    } else if (currentScroll > maxScroll) {
      container.scrollTo({ left: maxScroll, behavior: 'smooth' });
      currentScroll = maxScroll;
    }

    // Determine the target index after drag
    // Calculate the center of the visible part of the thumbnail strip
    const viewportCenter = currentScroll + containerWidth / 2;
    
    // Find the thumbnail whose center is closest to the viewportCenter
    let closestIndex = 0;
    let minDistance = Infinity;

    for (let i = 0; i < mediaItems.length; i++) {
      const thumbnailCenter = (i * itemTotalWidth) + (itemTotalWidth / 2) - (THUMBNAIL_GAP / 2) ;
      const distance = Math.abs(viewportCenter - thumbnailCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    }
    
    // Delay setting current index slightly to allow bounce animation to be more visible if it happens
    // And to ensure the click handler doesn't fire immediately if it was a very short drag
    setTimeout(() => {
        if (closestIndex !== currentIndex) {
         setCurrentIndex(closestIndex);
        }
        // Ensure the thumbnail strip also correctly centers on the final selected item if not already by bounce
        // This is a fallback if the bounce logic alone doesn't perfectly center it.
        const finalTargetScroll = (closestIndex * itemTotalWidth) - (containerWidth / 2) + (itemTotalWidth / 2);
        container.scrollTo({
            left: Math.max(0, Math.min(finalTargetScroll, maxScroll)),
            behavior: 'smooth'
        });
    }, 50);

  };

  return (
    <div className="relative w-full">
      <div className="relative mx-auto max-w-md">
        {/* Main image viewer */}
        <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-2 p-2">
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleDragEnd}
            className={`flex h-full w-full overflow-x-auto overflow-y-hidden rounded-lg bg-black items-center snap-x snap-mandatory ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
              userSelect: "none",
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {mediaItems.map((item, index) => {
              const isActive = index === currentIndex;
              const isVideo = item.type === 'video';
              
              return (
                <div
                  key={item.id}
                  className="relative flex-shrink-0 flex items-center justify-center snap-center"
                  style={{ 
                    width: '100%',
                  }}
                >
                  <div
                    className={`relative transition-all duration-500 ease-out ${
                      isActive ? 'scale-100' : 'scale-95 opacity-80'
                    }`}
                    style={{ width: '100%', height: '100%' }}
                  >
                    {isVideo ? (
                      <video
                        ref={(el) => {
                          if (el) videoRefs.current[index] = el;
                        }}
                        className="h-full w-full object-cover rounded-lg"
                        src={item.videoUrl || item.url}
                        muted={isMuted}
                        playsInline
                        loop
                        preload="metadata"
                      />
                    ) : (
                      <img
                        src={item.url}
                        alt={`${item.type} ${item.id}`}
                        className="h-full w-full object-cover rounded-lg"
                        draggable={false}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sound toggle button */}
          {mediaItems[currentIndex]?.type === 'video' && (
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="absolute bottom-4 right-4 z-10 rounded-full bg-black/60 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/80"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <VolumeX className="h-5 w-5" />
              ) : (
                <Volume2 className="h-5 w-5" />
              )}
            </button>
          )}
        </div>

        {/* Thumbnail strip */}
        <div className="mt-3 overflow-hidden rounded-lg bg-gray-2 p-1">
          <div
            ref={thumbnailRef}
            className={`flex items-center gap-1 overflow-x-auto ${isThumbnailDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            onMouseDown={handleThumbnailMouseDown}
            onMouseMove={handleThumbnailMouseMove}
            onMouseUp={handleThumbnailDragEnd}
            onMouseLeave={handleThumbnailDragEnd}
            onTouchStart={handleThumbnailTouchStart}
            onTouchMove={handleThumbnailTouchMove}
            onTouchEnd={handleThumbnailDragEnd}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              userSelect: "none",
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {mediaItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleThumbnailClick(index)}
                className={`relative h-14 w-14 flex-shrink-0 overflow-hidden rounded transition-all duration-300 ${
                  index === currentIndex
                    ? 'ring-2 ring-white ring-offset-1 ring-offset-gray-2 scale-110'
                    : 'opacity-60 hover:opacity-80'
                } ${isThumbnailDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
              >
                {item.type === 'video' ? (
                  <video
                    className="h-full w-full object-cover pointer-events-none"
                    src={item.thumbnail}
                    muted
                    preload="metadata"
                  />
                ) : (
                  <img
                    src={item.thumbnail}
                    alt={`Thumbnail ${index + 1}`}
                    className="h-full w-full object-cover"
                    draggable={false}
                  />
                )}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none">
                    <div className="h-0 w-0 border-y-[4px] border-l-[6px] border-y-transparent border-l-white" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 
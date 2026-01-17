interface User {
  id: string;
  firstName: string;
  lastName: string;
  additionalName?: string;
  headlines?: string[];
  profilePicture?: string;
  connectionDegree?: "1st" | "2nd" | "3rd" | "3rd+";
  isFollowing?: boolean;
}

interface Comment {
  id: string;
  author: User;
  body: string;
  replies?: Comment[];
  likesCount?: number;
  createdAt: string | Date;
  updatedAt?: string | Date;
}

interface Reaction {
  type: "Celebrate" | "Like" | "Support" | "Insightful" | "Funny" | "Love";
  user: User;
  createdAt: string | Date;
}

interface MediaContent {
  type: "image" | "video" | "document" | "article";
  thumbnail?: string;
  alt?: string;
  duration?: number;
}

interface Content {
  text: string;
  media?: MediaContent[];
  hashtags?: string[];
  mentions?: User[];
}

export interface PostInterface {
  id: string;
  type: "original" | "repost" | "article" | "poll";
  author: User;
  contents: Content;
  visibility: "Private" | "Public" | "Connections";
  likesCount: number;
  comments?: Comment[];
  repostsCount?: number;
  reactions?: Reaction[];
  createdAt: string | Date;
  updatedAt?: string | Date;
  isPromoted?: boolean;
  isPinned?: boolean;
}

export const users: User[] = [
  {
    id: "user_001",
    firstName: "Sarah",
    lastName: "Chen",
    headlines: ["Senior Product Manager at TechCorp", "Building the future of AI"],
    profilePicture: "https://i.pravatar.cc/150?img=1",
    connectionDegree: "1st",
    isFollowing: true,
  },
  {
    id: "user_002",
    firstName: "Michael",
    lastName: "Rodriguez",
    headlines: ["Full Stack Developer | React & Node.js Enthusiast"],
    profilePicture: "https://i.pravatar.cc/150?img=2",
    connectionDegree: "2nd",
    isFollowing: false,
  },
  {
    id: "user_003",
    firstName: "Priya",
    lastName: "Sharma",
    headlines: ["UX Designer | Speaker | Advocate for Inclusive Design"],
    profilePicture: "https://i.pravatar.cc/150?img=3",
    connectionDegree: "1st",
    isFollowing: true,
  },
  {
    id: "user_004",
    firstName: "James",
    lastName: "Anderson",
    headlines: ["CEO at StartupHub", "Angel Investor", "3x Founder"],
    profilePicture: "https://i.pravatar.cc/150?img=4",
    connectionDegree: "3rd",
    isFollowing: true,
  },
  {
    id: "user_005",
    firstName: "Emily",
    lastName: "Thompson",
    headlines: ["Marketing Director | Brand Strategist | Coffee Addict"],
    profilePicture: "https://i.pravatar.cc/150?img=5",
    connectionDegree: "1st",
    isFollowing: false,
  },
  {
    id: "user_006",
    firstName: "David",
    lastName: "Kim",
    headlines: ["Data Scientist @ Google | ML Researcher"],
    profilePicture: "https://i.pravatar.cc/150?img=6",
    connectionDegree: "2nd",
    isFollowing: true,
  },
  {
    id: "user_007",
    firstName: "Lisa",
    lastName: "Johnson",
    headlines: ["HR Director | Talent Development Expert"],
    profilePicture: "https://i.pravatar.cc/150?img=7",
    connectionDegree: "1st",
    isFollowing: false,
  },
];

// Dummy Posts
export const dummyPosts: PostInterface[] = [
  {
    id: "post_001",
    type: "original",
    author: users[0],
    contents: {
      text: "Excited to share that our team just launched the new AI-powered feature! 🚀 After 6 months of hard work, we're finally seeing it come to life. Huge shoutout to the amazing engineers and designers who made this possible.\n\nWhat I learned from this project:\n✓ User feedback is gold\n✓ Iterate fast, fail faster\n✓ Team collaboration > individual brilliance\n\nWould love to hear your thoughts on AI integration in product development!",
      media: [
        {
          type: "image",
          thumbnail: "https://picsum.photos/seed/tech1/800/600",
          alt: "Team celebrating product launch",
        },
      ],
      hashtags: ["ProductManagement", "AI", "TechInnovation", "Teamwork"],
      mentions: [users[2], users[5]],
    },
    visibility: "Public",
    likesCount: 347,
    repostsCount: 45,
    reactions: [
      { type: "Celebrate", user: users[1], createdAt: "2026-01-16T10:30:00Z" },
      { type: "Like", user: users[2], createdAt: "2026-01-16T11:15:00Z" },
      { type: "Insightful", user: users[3], createdAt: "2026-01-16T12:00:00Z" },
      { type: "Support", user: users[4], createdAt: "2026-01-16T13:45:00Z" },
    ],
    comments: [
      {
        id: "comment_001",
        author: users[1],
        body: "Congratulations Sarah! The AI integration looks seamless. Would love to learn more about the technical architecture behind this.",
        likesCount: 12,
        createdAt: "2026-01-16T14:20:00Z",
        replies: [
          {
            id: "comment_001_reply_001",
            author: users[0],
            body: "Thanks Michael! We used a hybrid approach with GPT-4 and custom ML models. Happy to share more details - let's connect!",
            likesCount: 8,
            createdAt: "2026-01-16T15:00:00Z",
          },
        ],
      },
      {
        id: "comment_002",
        author: users[3],
        body: "This is exactly what the industry needs. User-centric AI is the future! 👏",
        likesCount: 5,
        createdAt: "2026-01-16T16:30:00Z",
      },
    ],
    createdAt: "2026-01-16T09:00:00Z",
    isPinned: true,
  },
  {
    id: "post_002",
    type: "original",
    author: users[1],
    contents: {
      text: "Just finished a deep dive into React Server Components. Mind = blown 🤯\n\nHere's what makes them game-changing:\n\n1. Zero client-side JavaScript for components that don't need interactivity\n2. Direct database access without API endpoints\n3. Automatic code splitting\n4. Improved performance by default\n\nThe future of React development is here, and it's exciting! Anyone else experimenting with RSC?",
      hashtags: ["React", "WebDevelopment", "JavaScript", "Frontend"],
    },
    visibility: "Public",
    likesCount: 892,
    repostsCount: 123,
    reactions: [
      { type: "Like", user: users[0], createdAt: "2026-01-15T08:15:00Z" },
      { type: "Insightful", user: users[5], createdAt: "2026-01-15T09:30:00Z" },
      { type: "Love", user: users[2], createdAt: "2026-01-15T10:45:00Z" },
    ],
    comments: [
      {
        id: "comment_003",
        author: users[5],
        body: "Great breakdown! We've been using RSC in production for 3 months now. The performance improvements are real.",
        likesCount: 23,
        createdAt: "2026-01-15T11:00:00Z",
        replies: [
          {
            id: "comment_003_reply_001",
            author: users[1],
            body: "That's awesome David! Any gotchas or best practices you'd recommend?",
            likesCount: 4,
            createdAt: "2026-01-15T11:30:00Z",
          },
          {
            id: "comment_003_reply_002",
            author: users[5],
            body: "Main thing: be mindful of the client/server boundary. Start small and gradually migrate. Also, caching strategies are crucial!",
            likesCount: 15,
            createdAt: "2026-01-15T12:00:00Z",
          },
        ],
      },
    ],
    createdAt: "2026-01-15T07:45:00Z",
  },
  {
    id: "post_003",
    type: "article",
    author: users[2],
    contents: {
      text: "I just published a new article: \"The Psychology of Color in UX Design: A Data-Driven Approach\"\n\nAfter analyzing 500+ successful apps, I discovered some fascinating patterns about how color choices impact user engagement and conversion rates.\n\nKey takeaways:\n• Blue increases trust by 34% in financial apps\n• Orange CTAs outperform green by 21%\n• Dark mode isn't just trendy - it improves focus time by 18%\n\nLink to full article in the comments 👇",
      media: [
        {
          type: "article",
          thumbnail: "https://picsum.photos/seed/ux1/1200/630",
          alt: "Color psychology in UX design infographic",
        },
      ],
      hashtags: ["UXDesign", "ColorTheory", "UserExperience", "DesignThinking"],
    },
    visibility: "Public",
    likesCount: 1247,
    repostsCount: 234,
    reactions: [
      { type: "Insightful", user: users[0], createdAt: "2026-01-14T13:00:00Z" },
      { type: "Like", user: users[1], createdAt: "2026-01-14T14:15:00Z" },
      { type: "Love", user: users[4], createdAt: "2026-01-14T15:30:00Z" },
    ],
    comments: [
      {
        id: "comment_004",
        author: users[0],
        body: "This is incredibly valuable research, Priya! Sharing with my design team right away.",
        likesCount: 18,
        createdAt: "2026-01-14T16:00:00Z",
      },
      {
        id: "comment_005",
        author: users[4],
        body: "The dark mode stat is fascinating! We're considering implementing it for our app. Any tips on the transition?",
        likesCount: 7,
        createdAt: "2026-01-14T17:30:00Z",
        replies: [
          {
            id: "comment_005_reply_001",
            author: users[2],
            body: "Definitely give users control! Auto-switching based on system preferences works well, but always include a manual toggle. Test contrast ratios carefully.",
            likesCount: 12,
            createdAt: "2026-01-14T18:00:00Z",
          },
        ],
      },
    ],
    createdAt: "2026-01-14T12:00:00Z",
  },
  {
    id: "post_004",
    type: "original",
    author: users[3],
    contents: {
      text: "Unpopular opinion: Your startup doesn't need VC funding to succeed.\n\nWe just hit $5M ARR completely bootstrapped. Here's what made it possible:\n\n→ Focus on profitability from day 1\n→ Build what customers actually need\n→ Grow organically through word-of-mouth\n→ Keep burn rate low (we ran from a garage for 2 years)\n\nVC money can accelerate growth, but it's not the only path. Sometimes constraints breed creativity.\n\nWhat's your take? Bootstrap or raise? 💭",
      hashtags: ["Startups", "Entrepreneurship", "Bootstrap", "FounderLife"],
      mentions: [users[0]],
    },
    visibility: "Public",
    likesCount: 2156,
    repostsCount: 412,
    reactions: [
      { type: "Celebrate", user: users[0], createdAt: "2026-01-13T09:00:00Z" },
      { type: "Support", user: users[1], createdAt: "2026-01-13T10:00:00Z" },
      { type: "Insightful", user: users[6], createdAt: "2026-01-13T11:00:00Z" },
      { type: "Like", user: users[2], createdAt: "2026-01-13T12:00:00Z" },
    ],
    comments: [
      {
        id: "comment_006",
        author: users[6],
        body: "Both paths are valid! It really depends on the business model and market timing. Congrats on the milestone! 🎉",
        likesCount: 45,
        createdAt: "2026-01-13T13:00:00Z",
      },
      {
        id: "comment_007",
        author: users[1],
        body: "This is inspiring! Did you ever feel pressure to raise just because everyone else was doing it?",
        likesCount: 19,
        createdAt: "2026-01-13T14:30:00Z",
        replies: [
          {
            id: "comment_007_reply_001",
            author: users[3],
            body: "Absolutely! The pressure was real, especially when competitors raised big rounds. But staying focused on our customers kept us grounded.",
            likesCount: 28,
            createdAt: "2026-01-13T15:00:00Z",
          },
        ],
      },
    ],
    createdAt: "2026-01-13T08:30:00Z",
  },
  {
    id: "post_005",
    type: "original",
    author: users[4],
    contents: {
      text: "🎯 Marketing lesson I learned the hard way:\n\nStop creating content for everyone. Start creating content for someone.\n\nWhen we narrowed our target audience from \"business professionals\" to \"B2B SaaS founders with 10-50 employees,\" our engagement went up 340%.\n\nSame effort. Better results. All because we got specific.\n\nYour niche is not a limitation - it's your superpower. 💪\n\nWho's your ideal customer? Can you describe them in one sentence?",
      media: [
        {
          type: "image",
          thumbnail: "https://picsum.photos/seed/marketing1/800/800",
          alt: "Target audience funnel diagram",
        },
      ],
      hashtags: ["Marketing", "ContentStrategy", "B2B", "GrowthHacking"],
    },
    visibility: "Public",
    likesCount: 1834,
    repostsCount: 287,
    reactions: [
      { type: "Insightful", user: users[0], createdAt: "2026-01-12T10:00:00Z" },
      { type: "Like", user: users[3], createdAt: "2026-01-12T11:00:00Z" },
      { type: "Celebrate", user: users[2], createdAt: "2026-01-12T12:00:00Z" },
    ],
    comments: [
      {
        id: "comment_008",
        author: users[0],
        body: "340%?! That's incredible. We're struggling with this right now. How did you figure out your specific niche?",
        likesCount: 31,
        createdAt: "2026-01-12T13:00:00Z",
        replies: [
          {
            id: "comment_008_reply_001",
            author: users[4],
            body: "Customer interviews! We talked to our top 20 customers and found the common thread. Then doubled down on that persona.",
            likesCount: 22,
            createdAt: "2026-01-12T13:45:00Z",
          },
        ],
      },
      {
        id: "comment_009",
        author: users[3],
        body: "Preach! We made the same mistake early on. Specificity = clarity = conversions.",
        likesCount: 14,
        createdAt: "2026-01-12T14:30:00Z",
      },
    ],
    createdAt: "2026-01-12T09:15:00Z",
    isPromoted: true,
  },
  {
    id: "post_006",
    type: "original",
    author: users[5],
    contents: {
      text: "Spent the last 3 months building a machine learning model to predict customer churn. Here are the top 5 features that matter most:\n\n1. Time since last login (41% importance)\n2. Feature adoption rate (28%)\n3. Support ticket frequency (15%)\n4. Session duration trends (10%)\n5. Payment history (6%)\n\nSurprisingly, pricing wasn't in the top 10! 📊\n\nThe real insight? Engagement metrics >>> everything else.\n\nData scientists: what unexpected patterns have you found in your models?",
      media: [
        {
          type: "image",
          thumbnail: "https://picsum.photos/seed/data1/1000/600",
          alt: "Feature importance chart for churn prediction",
        },
      ],
      hashtags: ["DataScience", "MachineLearning", "Analytics", "AI"],
    },
    visibility: "Public",
    likesCount: 1456,
    repostsCount: 198,
    reactions: [
      { type: "Insightful", user: users[1], createdAt: "2026-01-17T07:00:00Z" },
      { type: "Like", user: users[0], createdAt: "2026-01-17T08:00:00Z" },
      { type: "Celebrate", user: users[4], createdAt: "2026-01-17T09:00:00Z" },
    ],
    comments: [
      {
        id: "comment_010",
        author: users[1],
        body: "Love this breakdown! What model did you end up using? Gradient boosting?",
        likesCount: 27,
        createdAt: "2026-01-17T10:00:00Z",
        replies: [
          {
            id: "comment_010_reply_001",
            author: users[5],
            body: "XGBoost actually! Tried Random Forest and LightGBM too, but XGBoost gave us the best AUC score (0.89).",
            likesCount: 19,
            createdAt: "2026-01-17T10:30:00Z",
          },
        ],
      },
      {
        id: "comment_011",
        author: users[0],
        body: "The engagement insight is gold. We should be tracking this more closely in our product analytics.",
        likesCount: 12,
        createdAt: "2026-01-17T11:00:00Z",
      },
    ],
    createdAt: "2026-01-17T06:30:00Z",
  },
];

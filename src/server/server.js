import { reactive } from "vue";

export const posts = reactive([
    {
        id: 1,
        body: "Learn how to grow your business with effective social media strategies and tools tailored for startups. Explore innovative techniques to boost your online presence.",
        title: "Premium Vector | Business Development for Startup Social Media Post or Grow Your Business",
        image_path: "https://img.freepik.com/premium-vector/business-development-startup-social-media-post-grow-your-business-online-course-web-banner_71956-1314.jpg",
        create_at: "2024-12-25T10:00:00",
        user: {
            id: 1,
            name: "Admin",
            profile_image: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/18fafc59-b8f8-4cfd-adb0-ebda9da48e03/4721eea8-03cf-4935-aa3d-0e74bdd2d034.png",
            create_at: "2024-12-24T09:00:00"
        }
    },
    {
        id: 2,
        body: "Discover creative marketing strategies designed specifically for startups. From social media campaigns to email marketing, elevate your business to the next level.",
        title: "Explore Creative Marketing Strategies for Your Startup",
        image_path: "https://img.freepik.com/premium-vector/creative-digital-marketing-strategy-post_71956-1500.jpg",
        create_at: "2024-12-24T14:00:00",
        user: {
            id: 2,
            name: "Editor",
            profile_image: "https://img.freepik.com/premium-photo/profile-picture-user-avatar-isolated-illustration_71956-1589.jpg",
            create_at: "2024-12-23T11:30:00"
        }
    },
    {
        id: 3,
        body: "Networking is a cornerstone of success. Learn actionable tips to build meaningful connections and expand your professional circle effectively.",
        title: "Tips for Successful Business Networking",
        image_path: "https://cdn.dribbble.com/users/6154824/screenshots/19214051/social_media_design_for_wordpress_course.png",
        create_at: "2024-12-23T16:00:00",
        user: {
            id: 3,
            name: "Manager",
            profile_image: "https://img.freepik.com/premium-photo/avatar-user-profile-icon-vector_123456-890.jpg",
            create_at: "2024-12-22T10:45:00"
        }
    },
    {
        id: 4,
        body: "Small businesses can achieve big growth with the right hacks. Check out these top 10 tips for maximizing efficiency and expanding your reach.",
        title: "Top 10 Growth Hacks for Small Businesses",
        image_path: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/web-development-training-institute-design-template-b6d70eb43e52eb852447c2e8597d75ab_screen.jpg?ts=1695807043",
        create_at: "2024-12-22T10:00:00",
        user: {
            id: 4,
            name: "Consultant",
            profile_image: "https://img.freepik.com/premium-vector/user-profile-avatar_7890-123.jpg",
            create_at: "2024-12-21T08:00:00"
        }
    },
    {
        id: 5,
        body: "A professional online presence is essential for modern businesses. Explore how to craft a polished image that attracts and retains customers.",
        title: "The Art of Building a Professional Online Presence",
        image_path: "https://coreldrawdesign.com/resources/previews/preview-app-development-course-banner,-computer-institute-promotional-social-media-post-banner-template,-free-cdr-design-1663856474.jpg",
        create_at: "2024-12-21T09:30:00",
        user: {
            id: 5,
            name: "Creative",
            profile_image: "https://img.freepik.com/premium-photo/avatar-picture-for-user-profile_54321-678.jpg",
            create_at: "2024-12-20T15:15:00"
        }
    },
    {
        id: 6,
        body: "Digital transformation is revolutionizing industries. Uncover the secrets to adapting and thriving in a rapidly changing digital world.",
        title: "Unlocking the Secrets of Digital Transformation",
        image_path: "https://img.freepik.com/premium-vector/digital-transformation-secrets-social-media-post_34567-8901.jpg",
        create_at: "2024-12-20T18:45:00",
        user: {
            id: 6,
            name: "Developer",
            profile_image: "https://img.freepik.com/premium-vector/illustration-user-profile-icon_56789-012.jpg",
            create_at: "2024-12-19T12:30:00"
        }
    },
    {
        id: 7,
        body: "Innovation is key to startup success. Check out these creative ideas to expand your startup and stay ahead in competitive markets.",
        title: "Innovative Ideas to Expand Your Startup",
        image_path: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/fee063102145463.5f3009353767c.jpg",
        create_at: "2024-12-19T08:20:00",
        user: {
            id: 7,
            name: "Innovator",
            profile_image: "https://img.freepik.com/premium-photo/business-avatar-user-profile_67890-123.jpg",
            create_at: "2024-12-18T14:50:00"
        }
    },
]);


export const classPost = reactive([
    {
        id: 1,
        admin: {
            id: 1,
            name: "Admin",
            profile_image: "https://img.freepik.com/premium-vector/avatar-user-profile-icon-vector-illustration-design_123456-890.jpg",
            created_at: "2024-12-25T10:00:00"
        },
        title: "Mastering Business Development Strategies",
        description: "Learn the key strategies for developing a successful business in today's market.",
        price: 100, // Original price
        discount: 20, // Discount in percentage
        image_path: "https://img-c.udemycdn.com/course/750x422/3633728_3051_3.jpg",
        status: "ready"
    },
    {
        id: 2,
        admin: {
            id: 2,
            name: "Editor",
            profile_image: "https://img.freepik.com/premium-vector/avatar-profile-icon-vector-illustration_456789-012.jpg",
            created_at: "2024-12-24T09:30:00"
        },
        title: "Creative Marketing Ideas for Startups",
        description: "Explore unique and creative marketing techniques to help your startup stand out.",
        price: 150,
        discount: 15,
        image_path: "https://i.ytimg.com/vi/ityXLkukqg0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDHjEGBdJv1qib4zxnccVCeIYQoMw",
        status: "not ready"
    },
    {
        id: 3,
        admin: {
            id: 3,
            name: "Manager",
            profile_image: "https://img.freepik.com/premium-photo/business-avatar-user-profile_567890-123.jpg",
            created_at: "2024-12-23T08:15:00"
        },
        title: "Building Strong Professional Networks",
        description: "Discover the art of networking with industry professionals to foster long-term relationships.",
        price: 80,
        discount: 10,
        image_path: "https://www.classcentral.com/report/wp-content/uploads/2022/04/BCG-Web-Development-NEW-Banner.png",
        status: "ready"
    },
    {
        id: 4,
        admin: {
            id: 4,
            name: "Consultant",
            profile_image: "https://img.freepik.com/premium-photo/avatar-profile-business-user_678901-234.jpg",
            created_at: "2024-12-22T14:00:00"
        },
        title: "10 Growth Hacks for Small Businesses",
        description: "Small businesses can benefit from creative growth hacks that maximize impact.",
        price: 120,
        discount: 0, // No discount
        image_path: "https://techclass.com/cdn/shop/files/Basics-of-Web-Development-_HTML-CSS-JS_-Cover-TechClass-Training.png?v=1684355267",
        status: "not ready"
    },
    {
        id: 5,
        admin: {
            id: 5,
            name: "Creative",
            profile_image: "https://img.freepik.com/premium-vector/avatar-user-profile-icon-design_234567-890.jpg",
            created_at: "2024-12-21T18:20:00"
        },
        title: "The Importance of Building an Online Presence",
        description: "Learn how to create and maintain a professional profile to attract customers.",
        price: 90,
        discount: 25,
        image_path: "https://itdesigners.org/wp-content/uploads/2024/02/21-HTML-CSS-PROJECT-IDEAS-1-1024x576.jpg",
        status: "ready"
    }
]);


// Videos data is now reactive
export const videos = reactive([
    {
      id: 1,
      title: "Big Buck Bunny",
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      poster: "https://peach.blender.org/wp-content/uploads/title_anouncement.jpg",
    },
    {
      id: 2,
      title: "Elephant's Dream",
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      poster: "https://www.socialchamp.io/wp-content/uploads/2024/02/Content-Blog-Banner_Q4-2023_1125x600_92_Instagram-post-to-story.png",
    },
    {
      id: 3,
      title: "For Bigger Blazes",
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      poster: "https://buffer.com/library/content/images/2023/05/phone-graphic.png",
    },
    {
      id: 4,
      title: "Sintel",
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      poster: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202408/instagram-093537141-16x9_0.png?VersionId=bIcAUgm1Cq8zB0.bgqE0zSi6nskSZ0CY",
    },
  ]);
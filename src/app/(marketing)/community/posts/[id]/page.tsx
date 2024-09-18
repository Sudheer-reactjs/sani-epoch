// src/app/blog/posts/[id]/page.tsx
"use client";
import { useParams } from "next/navigation";
import { Breadcrumbs, Typography } from "@mui/material";
import Image from "next/image";
import { blogDetail } from "@/utlis/blogDetail";
import Link from "next/link";
import { CatLogoIcon, CheerIcon, CheerWhiteIcon, CommentIcon, FavIcon, FireIcon, LikeIcon } from "@/utlis/svg";
import { useState } from "react";
import MainBanner from "@/assets/images/main-banner.jpg";
import CommentUser from "@/assets/images/comment-user.png";
import { StaticImageData } from "next/image";
import CommunityCardSlider from "@/components/CommunityCardSlider";
 
interface Comment {
  id: number;
  author: string;
  image: string | StaticImageData;  
  text: string;
  date: string;
  cheers: number;
  likes: number;
  replies?: Comment[];
}

export default function Post() {
  const { id } = useParams();

  // Comment section state
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: "Mary Freund",
      image: CommentUser,
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
      date: "24 Aug, 2024",
      cheers: 500,
      likes: 1,
      replies: [],
    },
    {
      id: 2,
      author: "John Dukes",
      image: CommentUser, 
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
      date: "24 Aug, 2024",
      cheers: 0,
      likes: 1,
      replies: [],
    },
  ]);

  const [newComment, setNewComment] = useState("");
  const [cheer, setCheer] = useState(false); // Track cheer state
  const [replyToCommentId, setReplyToCommentId] = useState<number | null>(null);
  const [newReply, setNewReply] = useState("");

  const handlePostComment = () => {
    const newCommentData = {
      id: comments.length + 1,
      author: "Your Name",
      text: newComment,
      date: new Date().toLocaleDateString(),
      cheers: cheer ? 1 : 0, // Add a cheer if the user clicked the "Cheer" button
      likes: 0,
      replies: [], // Initialize with empty replies
    };
    setComments([...comments, newCommentData]);
    setNewComment("");
    setCheer(false); // Reset cheer state after posting
  };

  const handlePostReply = (parentId: number) => {
    const newReplyData = {
      id: comments.flatMap(comment => comment.replies ?? []).length + 1,
      author: "Your Name",
      text: newReply,
      date: new Date().toLocaleDateString(),
      cheers: 0,
      likes: 0,
      replies: [], // Replies can be added later
    };

    const updatedComments = comments.map(comment => 
      comment.id === parentId
        ? { ...comment, replies: [...(comment.replies ?? []), newReplyData] }
        : comment
    );

    setComments(updatedComments);
    setNewReply("");
    setReplyToCommentId(null); // Reset reply to comment ID
  };

  const blog = blogDetail.find((blog) => blog.id === parseInt(id as string));

  if (!blog) {
    return (
      <main className="bg-[#F7F7F7] bg-top relative z-[1] pt-[200px] pb-[300px] text-center">
        <p>Blog post not found</p>
      </main>
    );
  }

  return (
    <main className="singl-bolg-page community-footer-bg bg-[#F7F7F7] bg-top relative z-[1]  pt-[100px] md:pt-[150px] lg:pt-[200px]">
      {/* Breadcrumb */}
      <div className="container py-[20px] !max-w-[1200px]">
        <Breadcrumbs aria-label="breadcrumb">
          <Link href="/community">Community</Link>
          <Typography>{blog.heading}</Typography>
        </Breadcrumbs>
      </div>

      {/*Blog Detail*/}
      <section className=" relative z-[1] mt-[30px] md:mt-[50px]">
        <div className="">
          <div className="container !max-w-[1200px]">
            <ul className="flex gap-[10px] flex-wrap  mb-[20px] md:mb-[30px] md:gap-[20px]">
              <li className="flex items-center gap-[4px] bg-[#191919] uppercase text-[10px] font-[400] text-[#fff] py-[4.5px] px-[12px] tracking-[1px] rounded-[2px]">
                <CatLogoIcon /> {blog.category}
              </li>
              <li className="flex items-center gap-[4px] bg-[#191919] uppercase text-[10px] font-[400] text-[#fff] py-[4.5px] px-[12px] tracking-[1px] rounded-[2px]">
                {blog.tag}
              </li>
            </ul>

            <h1 className="lg:text-[56px] my-[30px]">{blog.heading}</h1>
            <div className="flex gap-[10px] flex-wrap items-center md:gap-[20px]">
              <p className=" !text-[14px] !m-[0] text-[#000] font-HelveticaNeue mt-[15px] md:mt-[0] md:!text-[16px]">
                By {blog.author}
              </p>
              <div className="bg-[#0B57A7] rounded-[2px] text-[10px] text-[#fff] py-[5px] px-[10px] tracking-[1px]">
                Wizard
              </div>
              <button className="border-solid border-[1px] border-[#CCC] rounded-[2px] text-[14px] text-[#191919] py-[5px] px-[8px] tracking-[1px]">
                Follow
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[35px] !pb-[50px] md:py-[90px]  lg:py-[100px]">
        <div className="container">
          <Image src={MainBanner} alt="" className="rounded-[10px]" />
        </div>
      </section>

      <section className="">
        <div className="container !max-w-[1200px]">
          <div className="post-meta flex items-center  gap-[10px] flex-wrap md:gap-[20px]">
            <span className="bg-[#fff] rounded-[4px] py-[11px] px-[13px] gap-[8px] flex justify-between items-center text-[14px] leading-[22px] text-custom-black text-left md:text-[16px]">
              <LikeIcon />
              {blog.likes !== undefined ? blog.likes : 0}
            </span>
            <button className="bg-[#fff] rounded-[4px] py-[11px] px-[13px] gap-[8px] flex justify-between items-center text-[14px] leading-[22px] text-custom-black text-left md:text-[16px]">
              <FavIcon /> Add to Favorite
            </button>
            <span className="bg-[#fff] rounded-[4px] py-[11px] px-[13px] gap-[8px] flex justify-between items-center text-[14px] leading-[22px] text-custom-black text-left md:text-[16px]">
              <CommentIcon />
              {blog.comments !== undefined ? blog.comments : 0}
            </span>
          </div>
          <div className="py-[40px] md:py-[60px] lg:py-[100px]">
            {blog.Disc1}{" "}
          </div>
          <Image src={MainBanner} alt="" className="rounded-[10px]" />
          <div className="py-[40px] md:py-[60px] lg:py-[100px]">
            {blog.Disc2}{" "}
          </div>
          <Image src={MainBanner} alt="" className="rounded-[10px]" />
          <div className="py-[40px] md:py-[60px] lg:py-[100px]">
            {blog.Disc3}{" "}
          </div>
          <Image src={MainBanner} alt="" className="rounded-[10px]" />
          <div className="py-[40px] md:py-[60px] lg:py-[100px]">
            {blog.Disc4}{" "}
          </div>
          <div className="features-list">
            {blog.FeaturesList}{" "}
          </div>
        </div>
      </section>

    

      {/* Comments Section */}
      <section className="comments-section mt-[50px] mb-[70px] md:mb-[100px]"> 
        <div className="container !max-w-[1200px]">
          <div className="max-w-[900px]">
           <div className="flex items-center justify-between mb-[20px]"> 
          <h3 className="text-[24px] lg:text-[36px] font-[400] "> 
             {comments.length} Comments  
          </h3>
          <FireIcon />
          </div>
          <div className="comment-input flex flex-col gap-[10px] mb-[20px]">
            <textarea
              className="w-full border-none bg-[#fff] p-[25px] text-[#808080] text-[16px] h-[180px] rounded-[10px]"
              value={newComment}
              placeholder="Leave a comment that is helpful or encouraging. Let’s master the markets together."
              onChange={(e) => setNewComment(e.target.value)}
            />
            <div className="flex items-center justify-end  gap-[20px] mt-[15px] ">
             <button
              className="border-solid border-[1px] border-[#CCC] rounded-[10px] flex items-center gap-[10px] px-[10px] h-[38px] tracking-[1px]"
              onClick={() => setCheer(!cheer)} // Toggle cheer state
            > 
              <CheerIcon /> 
              Cheer
            </button>
            <button
              className="bg-[#191919] text-white px-[16px] py-[5px] rounded-[10px] tracking-[1px]  h-[38px]"
              onClick={handlePostComment}
            >
              Post
            </button>
            </div>
          </div>

          <ul className="comment-list">
              {comments.map((comment) => (
                <li key={comment.id} className="mb-[20px]">
                  <div className="flex items-center gap-[20px]">
                    <div className="author-avatar">
                      <Image
                        src={comment.image}
                        alt={comment.author}
                        width={50}
                        height={50}
                        className="rounded-[50%] object-cover"
                      />
                    </div>
                    <div className="flex gap-[25px] items-center">
                      <div>
                        <p className="author-name font-bold text-[18px] !m-0 tracking-[.5px]">{comment.author}</p>
                        <p className="comment-date text-custom-black !text-[12px] !leading-[16px] tracking-[.5px]">
                          {comment.date}
                        </p>
                      </div>
                      <div className="bg-[#0B57A7] rounded-[2px] text-[10px] text-[#fff] py-[5px] px-[10px] tracking-[1px]">
                        Wizard
                      </div>
                    </div>
                  </div>
                  <p className="!text-[14px] tracking-[.5px] my-[20px]">{comment.text}</p>
                   <button className="bg-[#191919] flex items-center text-white px-[10px] py-[5px] gap-[10px] rounded-[10px] tracking-[1px]  h-[38px]">
                   <CheerWhiteIcon />  {comment.cheers} Cheer
                    </button>
                  <div className="comment-actions flex flex-wrap gap-[10px] mt-[20px]">
                    <button className="bg-[#fff] rounded-[4px] py-[11px] px-[13px] gap-[8px] flex justify-between items-center text-[16px] leading-[22px] text-custom-black text-left">
                      <LikeIcon /> {comment.likes} 
                    </button>
                     {/* Reply section */}
                  {replyToCommentId === comment.id && (
                    <div className="reply-input flex flex-col gap-[10px] mt-[20px] min-w-[100%]">
                      <textarea
                        className="w-full border-none bg-[#fff] p-[25px] text-[#808080] text-[16px] h-[120px] rounded-[10px]"
                        value={newReply}
                        placeholder="Leave a reply..."
                        onChange={(e) => setNewReply(e.target.value)}
                      />
                      <div className="flex items-centergap-[20px] mt-[15px]">
                        <button
                          className="bg-[#191919] text-white px-[16px] py-[5px] rounded-[10px] tracking-[1px] h-[38px]"
                          onClick={() => handlePostReply(comment.id)}
                        >
                          Reply
                        </button> 
                      </div>
                    </div>
                  )}
                  <button
                   className="rounded-[4px] py-[11px] px-[13px] gap-[8px] flex justify-between items-center text-[16px] leading-[22px] text-custom-black text-left"
                    onClick={() => setReplyToCommentId(replyToCommentId === comment.id ? null : comment.id)}
                  > 
                    <CommentIcon />
                    {replyToCommentId === comment.id ? "Cancel" : "Reply"}
                  </button>
                  {comment.replies && comment.replies.length > 0 && (
                    <ul className="min-w-[100%]   my-[20px]  ">
                      {comment.replies.map((reply) => (
                        <li key={reply.id} className="mb-[20px] border-l-[1px] border-l-[#BEBEBE] border-solid pl-[20px]">
                          <div className="flex items-center gap-[20px]">
                            <div className="author-avatar">
                              <Image
                                src={comment.image}
                                alt={reply.author}
                                width={50}
                                height={50}
                                className="rounded-[50%] object-cover"
                              />
                            </div>
                            <div className="flex gap-[25px] items-center">
                              <div>
                                <p className="author-name font-bold text-[18px] !m-0 tracking-[.5px]">{reply.author}</p>
                                <p className="comment-date text-custom-black !text-[12px] !leading-[16px] tracking-[.5px]">
                                  {reply.date}
                                </p>
                              </div>
                              <div className="bg-[#0B57A7] rounded-[2px] text-[10px] text-[#fff] py-[5px] px-[10px] tracking-[1px]">
                                Wizard
                              </div>
                            </div>
                          </div>
                          <p className="!text-[14px] tracking-[.5px] my-[20px]">{reply.text}</p>
                  <div className="comment-actions flex flex-wrap gap-[10px] mt-[20px]">
                    <button className="bg-[#fff] rounded-[4px] py-[11px] px-[13px] gap-[8px] flex justify-between items-center text-[16px] leading-[22px] text-custom-black text-left">
                      <LikeIcon /> {comment.likes} 
                    </button>
                    </div>
                        </li>
                      ))}
                    </ul>
                  )}
                  </div>
                 
                </li>
              ))}
            </ul>
        </div>
        </div>
      </section>
      <section className="bg-community bg-black text-center pt-[70px] pb-[200px] md:pt-[100px] md:pb-[260px] lg:pt-[160px] lg:pb-[282px]">
          <div className="container">
           
            <CommunityCardSlider />
          </div>
        </section>
    </main>
  );
}

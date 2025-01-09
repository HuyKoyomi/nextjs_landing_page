"use client";
import BlogItem from "@/components/Blog/BlogItem";
import { deletePost, getAllBlog } from "@/services/api";
import { IBlog } from "@/types/blog";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const BlogPage = () => {
  const [blogList, setBlogList] = useState<IBlog[]>([]);
  const [reload, setReload] = useState<boolean>(false)

  useEffect(() => {
    const fetch = async () => {
      const res = await getAllBlog();
      const { code, data, message } = res;
      if (code == 200 && data) {
        const tmp = data?.content?.map((el, index) => ({
          id: el?.id,
          title: el?.title,
          content: el?.content,
          author: el?.author,
          mainImage: listImg[index % 4],
        }));
        setBlogList(tmp);
      } else {
        toast.error(message);
      }
    };
    fetch();

  }, [reload]);

  const onDelete = async (id : number) => {
    try {
      let res = await deletePost(id);
      const { code, data, message } = res;
      if (code == 200 ) {
        toast.success(message);
        setReload(!reload);
      } else {
        toast.error(message);
      }
    } catch (error) {}
  };

  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {blogList.map((post, key) => (
              <BlogItem key={key} blog={post} onDelete={onDelete}/>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default BlogPage;

const listImg = [
  "/images/blog/blog-01.png",
  "/images/blog/blog-02.png",
  "/images/blog/blog-03.png",
  "/images/blog/blog-04.png",
];

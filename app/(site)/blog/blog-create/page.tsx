"use client";
import { createPost } from "@/services/api";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const CreatePost = () => {
  const router = useRouter(); // Khởi tạo router
  const [formInput, setFormInput] = useState({
    title: "",
    author: "",
    content: "",
    type: "",
  });

  async function onCreate() {
    try {
      let res = await createPost({
        title: formInput.title,
        author: formInput.author,
        content: formInput.content,
        type: formInput.type,
      });
      const { code, message } = res || {};
      if (code == 201) {
        toast.success(message);
        router.push("/blog"); // chuyển hướng đến trang đăng nhập
      } else {
        toast.error(message);
      }
    } catch (error) {}
  }
  return (
    <>
      {/* <!-- ===== SignUp Form Start ===== --> */}
      <section className="pb-12.5 pt-32.5 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="relative z-1 mx-auto max-w-c-1016 px-7.5 pb-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
          <div className="absolute bottom-17.5 left-0 -z-1 h-1/3 w-full">
            <Image
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="/images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top rounded-lg bg-white px-7.5 pt-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black xl:px-15 xl:pt-15"
          >
            <h2 className="mb-15 text-center text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
              Create post
            </h2>

            <div>
              <div className="mb-7.5 flex flex-col gap-7.5 lg:mb-12.5 lg:flex-row lg:justify-between lg:gap-14">
                <input
                  name="title"
                  type="text"
                  placeholder="Title"
                  value={formInput.title}
                  onChange={(e) =>
                    setFormInput({
                      ...formInput,
                      [e.target.name]: e.target.value,
                    })
                  }
                  className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                />

                <input
                  name="author"
                  type="text"
                  placeholder="Author"
                  value={formInput.author}
                  onChange={(e) =>
                    setFormInput({
                      ...formInput,
                      [e.target.name]: e.target.value,
                    })
                  }
                  className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                />
              </div>

              <div className="row mb-7.5 flex gap-7.5 lg:mb-12.5 lg:flex-row lg:justify-between lg:gap-14">
                <input
                  name="type"
                  type="text"
                  placeholder="Type"
                  value={formInput.type}
                  onChange={(e) =>
                    setFormInput({
                      ...formInput,
                      [e.target.name]: e.target.value,
                    })
                  }
                  className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                />
              </div>
              <div className="row mb-7.5 flex gap-7.5 lg:mb-12.5 lg:flex-row lg:justify-between lg:gap-14">
                <textarea
                  name="content"
                  // type="textarea"
                  placeholder="Content"
                  value={formInput.content}
                  onChange={(e) =>
                    setFormInput({
                      ...formInput,
                      [e.target.name]: e.target.value,
                    })
                  }
                  className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                />
              </div>

              <div className="flex flex-wrap gap-10 md:justify-between xl:gap-15">
                <button
                  aria-label="signup with email and content"
                  className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                  onClick={() => router.push("/blog")}
                >
                  <svg
                    className="fill-white"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    transform="rotate(180)"
                  >
                    <path
                      d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                      fill=""
                    />
                  </svg>
                  Back
                </button>

                <button
                  aria-label="signup with email and content"
                  className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                  onClick={onCreate}
                >
                  Confirm Create
                  <svg
                    className="fill-white"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                      fill=""
                    />
                  </svg>
                </button>
              </div>

              <div className="mt-12.5"></div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* <!-- ===== SignUp Form End ===== --> */}
    </>
  );
};

export default CreatePost;

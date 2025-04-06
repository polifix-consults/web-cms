import React, { useState } from "react";
import styles from "./Modal.module.css";
import { HiXMark } from "react-icons/hi2";
import { useForm } from "react-hook-form";
import useAddArticle from "./useAddticle";

export default function Modal({ setForm, form }) {
  const { mutate, isLoading, error, isSuccess } = useAddArticle();
  const [formState, setFormState] = useState("pending");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function onSubmit(data) {
    console.log(data);
    mutate(data);
    reset();
    if (isSuccess) setForm(false);
  }

  function onClose() {
    setForm(false);
    setFormState("pending");
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modalbox}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.modalHeader}>
            <h1 className={styles.h2Modal}>Add a new article</h1>
            <button onClick={onClose} type="button" className={styles.cancel}>
              <HiXMark />
            </button>
          </div>
          <div className={styles.modalInput}>
            <label htmlFor="Article Title">
              Article Title
              <input
                {...register("article_title", { required: true })}
                className={styles.modalInputBox}
                placeholder="article title"
                type="text"
                id="fullName"
              />
            </label>
            <label htmlFor="article image">
              Article Image
              <input
                {...register("article_img", { required: true })}
                className={styles.modalInputBox}
                placeholder="article image"
                type="text"
                id="artImg"
              />
            </label>
            <label htmlFor="article youtube link">
              Article Youtube Link
              <input
                {...register("article_yt_link", { required: true })}
                className={styles.modalInputBox}
                placeholder="Youtube Link"
                type="text"
                id="ytLink"
              />
            </label>

            <label htmlFor="slug">
              Slug
              <div>
                <input
                  className={styles.modalInputBox}
                  placeholder="does-the-government-really-care"
                  type="text"
                  id="slug"
                  {...register("slug", { required: true })}
                />
              </div>
            </label>
            <label htmlFor="article_body">
              Article Body
              <textarea
                className={styles.modalInputBox}
                placeholder="Article Body"
                id="description"
                {...register("article_body", { required: true })}
              />
            </label>
          </div>
          <div className={styles.btnBottom}>
            <button type="submit" className={styles.btnSubmit}>
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

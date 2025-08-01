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
    const datamod = {
      ...data,
      thumbnail: `https://img.youtube.com/vi/${data.thumbnail}/maxresdefault.jpg`,
    };
    console.log(datamod);
    mutate(datamod);
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
            <h1 className={styles.h2Modal}>Add a new podcast</h1>
            <button onClick={onClose} type="button" className={styles.cancel}>
              <HiXMark />
            </button>
          </div>
          <div className={styles.modalInput}>
            <label htmlFor="Video Title">
              Podcast Title
              <input
                {...register("vidDescription", { required: true })}
                className={styles.modalInputBox}
                placeholder="Podcast Title"
                type="text"
                id="Vid"
              />
            </label>
            <label htmlFor="Podcast Thumbnail">
              Podcast Thumbnail Image
              <input
                {...register("thumbnail", { required: true })}
                className={styles.modalInputBox}
                placeholder="thumbnail image ID"
                type="text"
                id="thumbnailimg"
              />
            </label>
            <label htmlFor="article youtube link">
              Podcast Youtube Link
              <input
                {...register("youTubeLink", { required: true })}
                className={styles.modalInputBox}
                placeholder="Youtube Link"
                type="text"
                id="ytLink"
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

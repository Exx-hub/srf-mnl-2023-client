import { ICourse } from "../../types/interfaces";
import styles from "./Modal.module.css";

interface ModalProps {
  course: ICourse | null;
  addCourse: (courseId: string | undefined) => Promise<void>;
  onCancel: () => void;
  enrollLoading: boolean;
}

function Modal({ course, addCourse, onCancel, enrollLoading }: ModalProps) {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalDetails}>
        <h4>Enroll to this course?</h4>
        <h2>{course?.title}</h2>
        <p>₱{course?.price}</p>
      </div>
      <div className={styles.modalButtons}>
        <button
          className={`${styles.btn} ${styles.btnCancel}`}
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className={`${styles.btn} ${styles.btnConfirm}`}
          onClick={() => addCourse(course?._id)}
        >
          {enrollLoading ? "Loading.." : "Confirm"}
        </button>
      </div>
    </div>
  );
}

export default Modal;

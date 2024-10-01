import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import CV from "../assets/cv/Luis_Santos_CV - fr.pdf";

const Contact = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duartion: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {t("CONTACT.address")}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {t("CONTACT.phoneNo")}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        >
          {t("CONTACT.email")}
        </motion.p>
        <div className="py-5">
          <motion.a
            href={CV}
            download="Luis Santos - CV"
            target="_blank"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.7 }}
            className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
          >
            Download CV
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

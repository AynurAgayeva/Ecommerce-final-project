import React, { useState } from "react";
  import { useTranslation } from "react-i18next";
  import { useEffect } from "react";

interface Question {
  question: string;
  answer: string;
}

const Faq: React.FC = () => {
  const [t, i18n] = useTranslation("global");
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0); 
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  const toggleAnswer = (index: number) => {
    if (currentQuestion === index) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(true);
    }
    setCurrentQuestion(index);
  };

  const questions: Question[] = [
    {
      question: "What is Home Decor Web Site?",
      answer:
        "Home Decor Web Site is an online store that offers a variety of home decor products.",
    },
    {
      question: "What kind of products does Home Decor Web Site offer?",
      answer:
        "Home Decor Web Site offers a wide range of home decor products including furniture, lighting, rugs, and home accessories.",
    },
    {
      question: "How can I place an order?",
      answer:
        "You can place an order by selecting the product you want and adding it to your shopping cart. Then you can proceed to checkout and enter your payment and shipping information.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards as well as PayPal and Apple Pay.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for all products. If you are not satisfied with your purchase, you can return it for a full refund or exchange.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can contact customer support by emailing us at support@homedecor.com or by calling our toll-free number at 1-800-123-4567.",
    },
    {
      question: "Can I cancel my order?",
      answer:
        "Yes, you can cancel your order as long as it has not yet been shipped. Please contact customer support to cancel your order.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to select countries. Please check our shipping policy for more information.",
    },
  ];

  return (
    <div className="about mt-5">
      <div className="contact-bg my-5 pb-5">
        <div className=" mt-5 contact p-5 container text-center rounded-3 pb-5">
          <h1 className=" mt-5  ">{t("faqHead")}</h1>
          <p className="text-center">
            <a href="/">Home</a>
            <i className=" mx-2 fa-solid fa-angle-right"></i>{" "}
            <span> {t("faqHead")}</span>
          </p>
        </div>
      </div>

      <div className="container ">
        <div className="row my-5 g-5">
          <div className="col-md-5 col-lg-4 about-left ">
            <div className="card1">
              <div className="card-body">
                <h2 className="card-title mb-4">{t("faqHelpHead")}</h2>
                <p className="card-text">{t("faqHelpDesc")}</p>
                <ul className="mb-5 mt-3">
                  <li>{t("faqHelpList1")}</li>
                  <li>{t("faqHelpList2")}</li>
                  <li>{t("faqHelpList3")}</li>
                  <li>{t("faqHelpList4")}</li>
                </ul>
              </div>

              <a
                href="https://helpcrunch.com/blog/faq-ecommerce/"
                className="card-link "
              >
                {t("faqBtn")} <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-md-7 col-lg-8 faq">
            <ol>
              {questions.map((q: Question, index: number) => (
                <li key={index}>
                  <div className="question" onClick={() => toggleAnswer(index)}>
                    <span>{q.question}</span>
                    {currentQuestion === index && isOpen ? (
                      <i className="fa-solid fa-minus"></i>
                    ) : (
                      <i className="fa-solid fa-plus"></i>
                    )}
                  </div>
                  {currentQuestion === index && isOpen && <p>{q.answer}</p>}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;








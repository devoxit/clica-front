import { useState, useEffect } from "react";
import { FormItem } from "./FormItem";

export const MultiStepForm = ({ list, step, onPageUpdate, pagesAnswers }) => {
  // store index number with the answers?
  const [answers, setAnswers] = useState({ index: step });
  console.log("mutistepfrom", answers);

  useEffect(() => {
    // check if the answers isn't empty
    if (Object.keys(answers).length > 1) {
      // update page answers
      onPageUpdate(answers.step, answers);
      // update page number locally
      setAnswers({  step:step });
    } else {
      // update page number locally
      setAnswers({  step:step });
    }
  },[step]);

  const updateAnswers = (value, category) => {
    setAnswers({ ...answers, [category]: value });
  };

  return (
    <div className="text-left">
      {list[step - 1].items?.map((item, index) => {
        return (
          <FormItem
            key={`${index}_${item.label}`}
            item={item}
            onChange={updateAnswers}
            answer={pagesAnswers[step] ? pagesAnswers[step][item.value] : null}
          />
        );
      })}
    </div>
  );
};

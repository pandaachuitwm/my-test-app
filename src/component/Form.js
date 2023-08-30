import { useState } from "react";

const Form = () => {
    const [isChecked, setIsChecked] = useState(false);
    return (
      <form>
        <label htmlFor="agreeRules">
        <input
          type="checkbox"
          id="agreeRules"
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        確認同意網站規則嗎?
        </label>
        <button type="button" disabled={!isChecked}>
          送出
        </button>
      </form>
    );
  };

  export default Form;
import Input from "../../../UI/Input/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = ({id}) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amoumt"
        input={{
          id: "amount_" + id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;

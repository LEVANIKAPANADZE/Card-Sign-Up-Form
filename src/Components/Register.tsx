import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Img from "/images/bg-card-back.png";
import * as yup from "yup";

const schema = yup.object({
  name: yup
    .string()
    .strict(false)
    .trim()
    .required("Name is required")
    .min(8, "Name must be at least 8 characters")
    .max(25, "Name must be maximum 25 characters")
    .test(""),
});

interface Inputs {
  name: string;
  cardNumber: string;
  mm: string;
  yy: string;
  cvc: string;
}

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  function onSubmit(data: any) {
    console.log(data);
  }

  const name = watch("name");
  const cardNumber = watch("cardNumber");
  const mm = watch("mm");
  const yy = watch("yy");
  const cvc = watch("cvc");

  return (
    <>
      {" "}
      <div>
        <h1>{name || "LEVANI KAPANADZE"}</h1>
        <h1>{cardNumber || "0000 0000 0000 0000"}</h1>
        <h1>{mm}</h1>
        <h1>{yy}</h1>
        <h1>{cvc}</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="Name">Cardholder Name</label>
          <input
            type="text"
            id="Name"
            {...register("name")}
            placeholder="e.g. Levani Kapanadze"
          />
          {errors.name ? <p>{errors.name.message}</p> : null}
        </div>

        <div>
          <label htmlFor="Number">Card Number</label>
          <input
            type="text"
            id="Number"
            {...register("cardNumber")}
            placeholder="e.g. 1234 5678 9123 0000"
          />
          {errors.name ? <p>{errors.name.message}</p> : null}
        </div>

        <div>
          {" "}
          <label>Exp. Date (MM/YY)</label>
          <input type="text" {...register("mm")} placeholder="MM" />
          {errors.name ? <p>{errors.name.message}</p> : null}
          <input type="text" {...register("yy")} placeholder="YY" />
          {errors.name ? <p>{errors.name.message}</p> : null}
        </div>

        <div>
          {" "}
          <label htmlFor="CVC">Card Number</label>
          <input
            type="text"
            id="CVC"
            {...register("cvc")}
            placeholder="e.g. 123"
          />
          {errors.name ? <p>{errors.name.message}</p> : null}
        </div>

        <button>Confirm</button>
      </form>
    </>
  );
}

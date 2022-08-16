import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import classNames from "classnames";
import { useContractRead, useContractWrite } from "wagmi";
import { BigNumber, ethers, utils } from "ethers";
import Select from "react-select";

import { useNetworkContract } from "@erc721k/deployments";

interface FormMintExampleProps {
  className?: string;
  defaults?: any;
  symbol?: string;
}

export const FormMintExample = ({ className }: FormMintExampleProps) => {
  const ABICoder = new utils.AbiCoder();

  const contract = useNetworkContract("localhost", "Example");

  const {
    control,
    register,
    watch,
    handleSubmit,
    formState: {},
  } = useForm({
    defaultValues: {
      pos1: { value: "0", label: "Wolf" },
      pos2: { value: "1", label: "Parrot" },
      pos3: { value: "2", label: "Fox" },
      pos4: { value: "3", label: "Octo" },
    },
  });
  const watchAll = watch();

  const { data, error, isLoading } = useContractRead({
    addressOrName: contract?.address || "",
    contractInterface: contract?.abi || "",
    functionName: "preview",
    args: ABICoder.encode(
      ["uint8", "uint8", "uint8", "uint8"],
      [
        watchAll.pos1.value,
        watchAll.pos2.value,
        watchAll.pos3.value,
        watchAll.pos4.value,
      ]
    ),
  });

  console.log(data, error, isLoading, "data");

  const onSubmit = async (_data: any) => {
    console.log("writing");
  };

  const optionsMenu = [
    { value: "0", label: "Wolf" },
    { value: "1", label: "Parrot" },
    { value: "2", label: "Fox" },
    { value: "3", label: "Octo" },
  ];

  const classes = classNames(
    className,
    "FormMintExample",
    "grid grid-cols-12 gap-10"
  );
  const classesLabel = "text-xs font-semibold mb-1 block ";

  const FieldSelect = ({ name, label, options }: any) => {
    return (
      <div className="">
        <label className={classesLabel}>{label}</label>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Select options={options} defaultValue={options[0]} {...field} />
          )}
        />
      </div>
    );
  };

  return (
    <>
      <div className={classes}>
        <div className="text-center z-5 relative col-span-8">
          <img className="rounded-xl shadow-lg mx-auto w-full" src={data} />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="z-0 relative col-span-4"
        >
          <div className=" grid grid-cols-1 gap-2 card">
            <FieldSelect name="pos1" label="Head" options={optionsMenu} />
            <FieldSelect name="pos2" label="Body" options={optionsMenu} />
            <FieldSelect name="pos3" label="Body" options={optionsMenu} />
            <FieldSelect name="pos4" label="Body" options={optionsMenu} />
          </div>
          <button className="btn btn-white btn-lg mt-3 w-full">Mint</button>
        </form>
      </div>
    </>
  );
};

export default FormMintExample;

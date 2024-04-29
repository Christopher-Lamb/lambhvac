import { Settings } from "http2";
import React from "react";

function toKebabCase(input: string): string {
  return (
    input
      // Convert the string to lowercase
      .toLowerCase()
      // Replace spaces with hyphens
      .replace(/\s+/g, "-")
  );
}

const inputStyle = "p-2 text-black";
const labelStyle = "kanit text-lg";

const Form: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className, id }) => {
  return (
    //action={"https://krispywebsites.com/form"} method="post"
    <form id={id} className={className}>
      <input type="hidden" name="recipient" value="christopher.j.lamb13@gmail.com" />
      {/* <input type="hidden" name="recipient" value="blamb@lambhvac.com" /> */}
      <input type="hidden" name="page" defaultValue={"Page"} />
      {/* <input type="hidden" name="redirect_url" value={window.location.href} /> */}
      {children}
    </form>
  );
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, ...other }) => {
  const { className, ...inputProps } = other;
  const name = toKebabCase(label);
  return (
    <div className={"w-full " + className}>
      <label htmlFor={name} className={labelStyle}>
        {label} {inputProps.required && <span className="text-red-600">*</span>}
      </label>
      <input id={name} name={name} className={"w-full shadow " + inputStyle} {...inputProps} />
    </div>
  );
};

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, ...other }) => {
  const { className, ...textAreaProps } = other;
  const name = toKebabCase(label);
  return (
    <div className={"w-full h-auto " + className}>
      {label && (
        <label htmlFor={name} className={labelStyle}>
          {label}
          {textAreaProps.required && <span className="text-red-600"> *</span>}
        </label>
      )}
      <textarea id={name} name={name} {...textAreaProps} className={"w-full shadow min-h-[8rem] " + inputStyle} />
    </div>
  );
};

interface SelectProps {
  label: string;
  options: string[];
  selected?: string;
}
const Select: React.FC<SelectProps> = ({ label, options, selected }) => {
  const name = toKebabCase(label);
  return (
    <div className="grid">
      <label htmlFor={name} className={labelStyle}>
        {label}
      </label>
      <select id={name} name={name} className={"w-full shadow " + inputStyle}>
        {options.map((value, i) => {
          if (value === selected)
            return (
              <option key={i} value={toKebabCase(value)} selected>
                {value}
              </option>
            );
          return (
            <option key={i} value={toKebabCase(value)}>
              {value}
            </option>
          );
        })}
      </select>
    </div>
  );
};
const FieldSet: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return <fieldset className={className}>{children}</fieldset>;
};

export { Form, Input, TextArea, FieldSet, Select };

import * as React from "react";

export interface MiddleComponentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  img: string;
  content1: string;
  content2: string;
}

const MiddleComponent = React.forwardRef<HTMLDivElement, MiddleComponentProps>(
  ({ img, content1, content2 }, ref) => {
    return (
      <div className="middle_component">
        <div ref={ref}>
          <img style={{ width: "170px" }} src={img}></img>
        </div>
        <div ref={ref} className="middle_content">
          {content1}
          <br></br>
          {content2}
        </div>
      </div>
    );
  }
);

MiddleComponent.displayName = "MiddleComponent";

export { MiddleComponent };

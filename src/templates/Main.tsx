import { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = ({ meta, children }: IMainProps) => (
  <div>
    {meta}
    <div>{children}</div>
  </div>
);

export { Main };

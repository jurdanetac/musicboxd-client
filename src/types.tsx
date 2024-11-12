type User = {
  id: number;
  handle: string;
};

type HeaderProps = {
  user: User;
};

type ContentProps = {
  user: User;
};

export type { User, HeaderProps, ContentProps };

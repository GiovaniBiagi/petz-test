import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { useRouter } from "next/router";
import { Breadcrumbs } from "./Breadcrumbs.types";

export const useBreadcrumbs = (): Breadcrumbs => {
  const router = useRouter();

  const paths = router.asPath.split("/").slice(1);

  const breadcrumbs = paths.map((path, index) => {
    const splittedPath = path.split("-");
    const text = capitalizeFirstLetter(splittedPath);

    if (index === 0) {
      path = `/${path}`;
    }

    return { path, text, isLast: index === paths.length - 1 };
  });

  return {
    breadcrumbs,
  };
};

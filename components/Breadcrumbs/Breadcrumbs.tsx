import React, { Fragment } from "react";
import * as S from "./Breadcrumbs.styles";
import { useBreadcrumbs } from "./useBreadcrumbs";

export function Breadcrumbs() {
  const { breadcrumbs } = useBreadcrumbs();

  return (
    <S.Container>
      {breadcrumbs.map((breadcrumb) => (
        <Fragment key={breadcrumb.path}>
          <S.BreadcrumbItem href={breadcrumb.path}>
            {breadcrumb.text}
          </S.BreadcrumbItem>
          {!breadcrumb.isLast && (
            <S.BreadcrumbSeparator>{">"}</S.BreadcrumbSeparator>
          )}
        </Fragment>
      ))}
    </S.Container>
  );
}

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pxrbsjdrcYiKeJrrydSqC9
// Component: 0iK5TiKaPB5mq
import * as React from "react";
import { Link } from "gatsby";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import MenuButton from "../../MenuButton"; // plasmic-import: tHKra2qqJQ6tmD/component
import IconLink from "../../IconLink"; // plasmic-import: oxTB6Z3xMqtire/component
import LinkButton from "../../LinkButton"; // plasmic-import: tu-boLyMtFKrN1/component
import { useScreenVariants as useScreenVariantszNo6Oijq3JlNiY } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: ZNo6oijq3JlNiY/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import * as projectcss from "./plasmic_tekkou_studios.module.css"; // plasmic-import: pxrbsjdrcYiKeJrrydSqC9/projectcss
import * as sty from "./PlasmicHeader.module.css"; // plasmic-import: 0iK5TiKaPB5mq/css
import LogoWhitesvgIcon from "./icons/PlasmicIcon__LogoWhitesvg"; // plasmic-import: U4HHM8rDMXQhVG/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: GBu9tlyNK1_c67/icon

createPlasmicElementProxy;

export const PlasmicHeader__VariantProps = new Array("expanded");

export const PlasmicHeader__ArgProps = new Array();

const $$ = {};

function PlasmicHeader__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "expanded",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.expanded
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantszNo6Oijq3JlNiY()
  });
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root,
        { [sty.rootexpanded]: hasVariant($state, "expanded", "expanded") }
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__lggQt)}
      >
        <MenuButton
          data-plasmic-name={"menuButton"}
          data-plasmic-override={overrides.menuButton}
          className={classNames("__wab_instance", sty.menuButton, {
            [sty.menuButtonexpanded]: hasVariant($state, "expanded", "expanded")
          })}
          expanded={
            hasVariant($state, "expanded", "expanded") &&
            hasVariant(globalVariants, "screen", "mobile")
              ? true
              : undefined
          }
        />

        <p.PlasmicLink
          className={classNames(projectcss.all, projectcss.a, sty.link__a3JmB)}
          component={Link}
          href={`/`}
          platform={"gatsby"}
        >
          <LogoWhitesvgIcon
            a={""}
            className={classNames(projectcss.all, sty.svg__ibkrG)}
            role={"img"}
          />
        </p.PlasmicLink>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__o3Lx4, {
            [sty.freeBoxexpanded__o3Lx41ELbq]: hasVariant(
              $state,
              "expanded",
              "expanded"
            )
          })}
        >
          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__jVva
            )}
            component={Link}
            href={`/store`}
            platform={"gatsby"}
          >
            {"Store"}
          </p.PlasmicLink>
          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__ezaGt
            )}
            component={Link}
            href={`/about`}
            platform={"gatsby"}
          >
            {"About"}
          </p.PlasmicLink>
          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__ikDFb
            )}
            component={Link}
            href={`/faq`}
            platform={"gatsby"}
          >
            {"Faq"}
          </p.PlasmicLink>
        </p.Stack>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__jn541)}
        >
          <IconLink
            data-plasmic-name={"iconLink"}
            data-plasmic-override={overrides.iconLink}
            className={classNames("__wab_instance", sty.iconLink)}
            icon={
              <React.Fragment>
                <IconIcon
                  className={classNames(projectcss.all, sty.svg___75TM)}
                  role={"img"}
                />

                <div
                  data-plasmic-name={"text"}
                  data-plasmic-override={overrides.text}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text
                  )}
                >
                  {"0"}
                </div>
              </React.Fragment>
            }
          />
        </p.Stack>
      </p.Stack>
      <div
        className={classNames(projectcss.all, sty.freeBox___8GDba, {
          [sty.freeBoxexpanded___8GDba1ELbq]: hasVariant(
            $state,
            "expanded",
            "expanded"
          )
        })}
      >
        <LinkButton
          className={classNames("__wab_instance", sty.linkButton__hCcNa)}
          text={"Home"}
          type={"blankGray"}
        />

        <LinkButton
          className={classNames("__wab_instance", sty.linkButton__mxhMh)}
          text={"New Arrival"}
          type={"blankGray"}
        />

        <LinkButton
          className={classNames("__wab_instance", sty.linkButton__l4XP9)}
          text={"Features"}
          type={"blankGray"}
        />

        <LinkButton
          className={classNames("__wab_instance", sty.linkButton__jsbXl)}
          text={"Blog"}
          type={"blankGray"}
        />

        <LinkButton
          className={classNames("__wab_instance", sty.linkButton__j38St)}
          text={"Contact"}
          type={"blankGray"}
        />
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "menuButton", "iconLink", "text"],
  menuButton: ["menuButton"],
  iconLink: ["iconLink", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHeader__ArgProps,
          internalVariantPropNames: PlasmicHeader__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    menuButton: makeNodeComponent("menuButton"),
    iconLink: makeNodeComponent("iconLink"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */
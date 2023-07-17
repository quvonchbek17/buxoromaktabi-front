import React from "react";
import { useLocation } from "react-router-dom";
import Helmet from "react-helmet";

const FACEBOOK_APP_ID = "XXXXXXXXX";

const defaultTitle = "Buxoro maktabi";
const defaultDescription =
  "Buxoro maktabi o'quv markazining rasmiy web-sahifasi. ";

const defaultSep = " | ";

const AppPageMetadata = ({ children, ...rest }) => {
  const { pathname } = useLocation();
  const getMetaTags = (
    {
      title,
      description,
      image,
      contentType,
      twitter,
      noCrawl,
      published = "01-05-2021",
      updated,
      category = "FrontEnd",
      tags = "Buxoro maktabi, Olmaliq, Matematika, Fizika, Kimyo, Ingliz tili, O'quv markaz",
    },
    pathname
  ) => {
    const theTitle = title
      ? (title + defaultSep + defaultTitle).substring(0, 60)
      : defaultTitle;
    const theDescription = description
      ? description.substring(0, 155)
      : defaultDescription;

    const metaTags = [
      { itemprop: "name", content: theTitle },
      { itemprop: "description", content: theDescription },
      { name: "description", content: theDescription },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: theTitle },
      { name: "twitter:description", content: theDescription },
      { property: "og:title", content: theTitle },
      { property: "og:type", content: contentType || "website" },
      { property: "og:url", content: "http://buxoromaktabi.uz/" + pathname },
      { property: "og:description", content: theDescription },
      { property: "og:site_name", content: defaultTitle },
      { property: "fb:app_id", content: FACEBOOK_APP_ID },
    ];

    if (noCrawl) {
      metaTags.push({ name: "robots", content: "noindex, nofollow" });
    }

    if (published) {
      metaTags.push({ name: "article:published_time", content: published });
    }
    if (updated) {
      metaTags.push({ name: "article:modified_time", content: updated });
    }
    if (category) {
      metaTags.push({ name: "article:section", content: category });
    }
    if (tags) {
      metaTags.push({ name: "article:tag", content: tags });
    }

    return metaTags;
  };

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "en",
          itemscope: undefined,
          itemtype: `http://schema.org/${rest.schema || "admin Template"}`,
        }}
        title={
          rest.title ? rest.title + defaultSep + defaultTitle : defaultTitle
        }
        link={[
          {
            rel: "canonical",
            href: "http://buxoromaktabi.uz" + pathname,
          },
        ]}
        meta={getMetaTags(rest, pathname)}
      />
      {children}
    </>
  );
};

export default AppPageMetadata;

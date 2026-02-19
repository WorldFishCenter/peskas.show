export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const PostPartsFragmentDoc = gql`
    fragment PostParts on Post {
  __typename
  title
  date
  author
  description
  tags
  draft
  coverImage
  body
}
    `;
export const RegionsPartsFragmentDoc = gql`
    fragment RegionsParts on Regions {
  __typename
  regions {
    __typename
    title
    desc
    ctaLabel
    ctaHref
    image
  }
}
    `;
export const SettingsPartsFragmentDoc = gql`
    fragment SettingsParts on Settings {
  __typename
  footer {
    __typename
    copyright
    contactEmails
  }
}
    `;
export const HomepagePartsFragmentDoc = gql`
    fragment HomepageParts on Homepage {
  __typename
  hero {
    __typename
    headline
    headlineHighlight
    subtitle
    ctaLabel
  }
  stats {
    __typename
    count
    suffix
    label
  }
  regionsSection {
    __typename
    title
    subtitle
    wioPrompt
    wioHref
    wioCta
  }
  features {
    __typename
    title
    description
    bgClass
  }
  about {
    __typename
    title
    subtitle
    image
    features {
      __typename
      title
      description
    }
  }
  cta {
    __typename
    title
    subtitle
    ctaLabel
    ctaHref
  }
  tracks {
    __typename
    title
    subtitle
    col1Title
    col1Items
    col2Title
    col2Items
    ctaLabel
    ctaHref
  }
  videoYoutubeId
  blogSection {
    __typename
    title
    subtitle
    ctaLabel
  }
}
    `;
export const HowItWorksPartsFragmentDoc = gql`
    fragment HowItWorksParts on HowItWorks {
  __typename
  hero {
    __typename
    title
    subtitle
  }
  pipeline {
    __typename
    title
    subtitle
    stages {
      __typename
      kicker
      title
      description
    }
  }
  workflow {
    __typename
    title
    subtitle
    steps {
      __typename
      id
      title
      summary
      items
    }
  }
  modules {
    __typename
    title
    subtitle
    items {
      __typename
      title
      icon
      body
      items
    }
  }
  keyFeatures {
    __typename
    title
    items
  }
  resourceLinks {
    __typename
    title
    items {
      __typename
      label
      href
    }
  }
  faq {
    __typename
    title
    subtitle
    items {
      __typename
      q
      a
    }
  }
  cta {
    __typename
    title
    subtitle
    airtableUrl
  }
}
    `;
export const DataResourcesPartsFragmentDoc = gql`
    fragment DataResourcesParts on DataResources {
  __typename
  hero {
    __typename
    title
    subtitle
  }
  publications {
    __typename
    title
    description
    airtableUrl
  }
  data {
    __typename
    title
    description
  }
}
    `;
export const PostDocument = gql`
    query post($relativePath: String!) {
  post(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PostParts
  }
}
    ${PostPartsFragmentDoc}`;
export const PostConnectionDocument = gql`
    query postConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PostFilter) {
  postConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PostParts
      }
    }
  }
}
    ${PostPartsFragmentDoc}`;
export const RegionsDocument = gql`
    query regions($relativePath: String!) {
  regions(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...RegionsParts
  }
}
    ${RegionsPartsFragmentDoc}`;
export const RegionsConnectionDocument = gql`
    query regionsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: RegionsFilter) {
  regionsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...RegionsParts
      }
    }
  }
}
    ${RegionsPartsFragmentDoc}`;
export const SettingsDocument = gql`
    query settings($relativePath: String!) {
  settings(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...SettingsParts
  }
}
    ${SettingsPartsFragmentDoc}`;
export const SettingsConnectionDocument = gql`
    query settingsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: SettingsFilter) {
  settingsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...SettingsParts
      }
    }
  }
}
    ${SettingsPartsFragmentDoc}`;
export const HomepageDocument = gql`
    query homepage($relativePath: String!) {
  homepage(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...HomepageParts
  }
}
    ${HomepagePartsFragmentDoc}`;
export const HomepageConnectionDocument = gql`
    query homepageConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HomepageFilter) {
  homepageConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...HomepageParts
      }
    }
  }
}
    ${HomepagePartsFragmentDoc}`;
export const HowItWorksDocument = gql`
    query howItWorks($relativePath: String!) {
  howItWorks(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...HowItWorksParts
  }
}
    ${HowItWorksPartsFragmentDoc}`;
export const HowItWorksConnectionDocument = gql`
    query howItWorksConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HowItWorksFilter) {
  howItWorksConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...HowItWorksParts
      }
    }
  }
}
    ${HowItWorksPartsFragmentDoc}`;
export const DataResourcesDocument = gql`
    query dataResources($relativePath: String!) {
  dataResources(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...DataResourcesParts
  }
}
    ${DataResourcesPartsFragmentDoc}`;
export const DataResourcesConnectionDocument = gql`
    query dataResourcesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: DataResourcesFilter) {
  dataResourcesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...DataResourcesParts
      }
    }
  }
}
    ${DataResourcesPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    post(variables, options) {
      return requester(PostDocument, variables, options);
    },
    postConnection(variables, options) {
      return requester(PostConnectionDocument, variables, options);
    },
    regions(variables, options) {
      return requester(RegionsDocument, variables, options);
    },
    regionsConnection(variables, options) {
      return requester(RegionsConnectionDocument, variables, options);
    },
    settings(variables, options) {
      return requester(SettingsDocument, variables, options);
    },
    settingsConnection(variables, options) {
      return requester(SettingsConnectionDocument, variables, options);
    },
    homepage(variables, options) {
      return requester(HomepageDocument, variables, options);
    },
    homepageConnection(variables, options) {
      return requester(HomepageConnectionDocument, variables, options);
    },
    howItWorks(variables, options) {
      return requester(HowItWorksDocument, variables, options);
    },
    howItWorksConnection(variables, options) {
      return requester(HowItWorksConnectionDocument, variables, options);
    },
    dataResources(variables, options) {
      return requester(DataResourcesDocument, variables, options);
    },
    dataResourcesConnection(variables, options) {
      return requester(DataResourcesConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "http://localhost:4001/graphql",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};

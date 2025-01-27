# cloud

**Since**: XD 14

The `cloud` module lets you get information about shared prototypes and design specs.

**Example**

```js
// Get prototypes data
const cloud = require("cloud");
var sharedArtifacts = cloud.getSharedArtifacts();
var prototypes = sharedArtifacts.filter(
  (artifact) => artifact.type === cloud.ArtifactType.PROTOTYPE
);
prototypes.forEach((artifact) => {
  console.log("Prototype URL: ", artifact.url);
});
```

**Example**

```js
// Get design specs data
const cloud = require("cloud");
var sharedArtifacts = cloud.getSharedArtifacts();
var specs = sharedArtifacts.filter(
  (artifact) => artifact.type === cloud.ArtifactType.SPECS
);
specs.forEach((artifact) => {
  console.log("Design Spec URL: ", artifact.url);
});
```

## Enums

<dl>
<dt><a name="ArtifactType"></a> ArtifactType : </dt><dd>`PROTOTYPE, SPECS` - Type of shared artifact: interactive prototype only, or developer-focused specs view (which may <i>also</i> include access to an interactive prototype view)</dd>
<dt><a name="TargetPlatform"></a> TargetPlatform : </dt><dd>`WEB, IOS, ANDROID` - Target platform for published design specs</dd>
<dt><a name="AccessLevel"></a> AccessLevel : </dt><dd>`LINKABLE, PASSWORD_PROTECTED, INVITE_ONLY` - Access level of the shared link: accessible to anyone with the link, anyone with the link + password, or only specific
Creative Cloud user accounts</dd>
</dl>

## Typedefs

### Typedef BaseSharedArtifact

Properties common to both types.

| Property      | Type         | Description                                                                |
| ------------- | ------------ | -------------------------------------------------------------------------- |
| type          | ArtifactType | Type of shared artifact                                                    |
| url           | string       | URL to view in browser                                                     |
| name          | string       | Name of shared artifact (often, but not always, matches the document name) |
| accessLevel   | AccessLevel  | Level of access protection                                                 |
| allowComments | boolean      | True if stakeholders can post comments on this artifact                    |

### Typedef PrototypeArtifact

Interactive prototype view generated via "Share for Review."

| Property         | Type    | Description                                                                                                                      |
| ---------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------- |
| embedURL         | string  | URL for embedding a view of the prototype inside an iframe (compact view with minimal surrounding UI)                            |
| embedWidth       | number  | iframe width needed to display embedURL. May include room for navigation UI in addition to the prototype's content itself.       |
| embedHeight      | number  | iframe height needed to display embedURL. May include room for navigation UI in addition to the prototype's content itself.      |
| fullscreenInPage | boolean | True if prototype defaults to a view that fills the entire page, with no surrounding UI visible for navigation, commenting, etc. |
| hotspotHints     | boolean | True if clicking in non-interactive parts of the prototype flashes visual hints indicating the interactive spots                 |

### Typedef SpecsArtifact

Developer-oriented specs view generated via "Share for Development." This may _also_ allow viewing the document as an interactive prototype, with default settings (`fullscreenInPage: false` and `hotspotHints: true`).

| Property       | Type         | Description                                                                               |
| -------------- | ------------ | ----------------------------------------------------------------------------------------- |
| targetPlatform | PlatformType | Target platform. Determines which information and measurement units are shown by default. |

## getSharedArtifacts()

▸ **getSharedArtifacts()**: `Array.<PrototypeArtifact|SpecsArtifact>`

Get a list of recently shared artifacts generated from this document.
Older artifacts may not be included even if the shared links are still live. Shared links that have
been deleted from the server (File > Manage Published Links) may still be listed here, as this API
only provides a record of recent share actions from XD - not what the links' current status on the
server may be.

The list may contain a mix of PrototypeArtifact and/or SpecsArtifact, and items are listed in no
particular order. If nothing has been shared from this document, an empty array is returned.

**Kind**: static method of [cloud](#module_cloud)

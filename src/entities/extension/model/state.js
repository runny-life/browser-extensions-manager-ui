let extensions = [];

export function setExtensions(data) {
  extensions = data;
}

export function getExtensions() {
  return extensions;
}

export function toggleExtension(name, isActive) {
  extensions = extensions.map((ext) => (ext.name === name ? { ...ext, isActive } : ext));
}

export function removeExtension(name) {
  extensions = extensions.filter((ext) => ext.name !== name);
}

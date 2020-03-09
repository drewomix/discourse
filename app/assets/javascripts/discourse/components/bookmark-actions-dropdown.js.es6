import { computed } from "@ember/object";
import DropdownSelectBoxComponent from "select-kit/components/dropdown-select-box";

export default DropdownSelectBoxComponent.extend({
  classNames: ["bookmark-actions-dropdown"],
  pluginApiIdentifiers: ["bookmark-actions-dropdown"],
  selectKitOptions: {
    icon: null,
    translatedNone: "...",
    showFullTitle: true
  },

  content: computed(() => {
    return [
      {
        id: "remove",
        icon: "trash-alt",
        name: I18n.t("post.bookmarks.actions.delete_bookmark.name"),
        description: I18n.t(
          "post.bookmarks.actions.delete_bookmark.description"
        )
      }
    ];
  }),

  actions: {
    onChange(action) {
      switch (action) {
        case "remove":
          this.removeBookmark(this.bookmark);
          break;
      }
    }
  }
});
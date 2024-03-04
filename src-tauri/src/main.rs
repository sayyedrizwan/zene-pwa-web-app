// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use tauri::{ AboutMetadata, CustomMenuItem, Menu, MenuItem, Submenu };

fn action_menu() -> Submenu {
  let settings = CustomMenuItem::new("settings".to_string(), "Settings");
  let refresh = CustomMenuItem::new("refresh".to_string(), "Refresh");
  return Submenu::new("Action", Menu::new().add_item(settings).add_item(refresh)); 
}

fn shortcuts_menu() -> Submenu {
  let notifications = CustomMenuItem::new("notifications".to_string(), "Notifications");
  let feed = CustomMenuItem::new("feed".to_string(), "Feed");
  let search = CustomMenuItem::new("search".to_string(), "Search");
  let my_music = CustomMenuItem::new("my_music".to_string(), "My Music");
  return Submenu::new("Shortcuts", Menu::new().add_item(notifications).add_item(feed).add_item(search).add_item(my_music)); 
}

fn main() {
  let action_menu = Menu::os_default("Zene").add_submenu(action_menu()).add_submenu(shortcuts_menu());
  tauri::Builder::default()
        .menu(action_menu)
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}



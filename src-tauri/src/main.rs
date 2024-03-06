// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use tauri::{ CustomMenuItem, Menu, Submenu, WindowMenuEvent };

fn action_menu() -> Submenu {
  let settings = CustomMenuItem::new("settings".to_string(), "Settings").accelerator("Cmd+S");
  let refresh = CustomMenuItem::new("refresh".to_string(), "Refresh").accelerator("Cmd+R");
  return Submenu::new("Action", Menu::new().add_item(settings).add_item(refresh)); 
}

fn shortcuts_menu() -> Submenu {
  let notifications = CustomMenuItem::new("notifications".to_string(), "Notifications").accelerator("Cmd+Shift+N");
  let feed = CustomMenuItem::new("feed".to_string(), "Feed").accelerator("Cmd+Shift+F");
  let search = CustomMenuItem::new("search".to_string(), "Search").accelerator("Cmd+Shift+S");
  let my_music = CustomMenuItem::new("my_music".to_string(), "My Music").accelerator("Cmd+Shift+M");
  return Submenu::new("Shortcuts", Menu::new().add_item(notifications).add_item(feed).add_item(search).add_item(my_music)); 
}

fn player_menu() -> Submenu {
  let play = CustomMenuItem::new("play".to_string(), "Play/Pause").accelerator("Space");
  let next = CustomMenuItem::new("next_song".to_string(), "Next Song").accelerator("E");
  let previous = CustomMenuItem::new("previous_song".to_string(), "Previous Song").accelerator("Q");
  let seek_forward = CustomMenuItem::new("seek_forward".to_string(), "Seek Forward").accelerator("D");
  let seek_backward = CustomMenuItem::new("seek_backward".to_string(), "Previous Song").accelerator("A");
  return Submenu::new("Playback", Menu::new().add_item(play).add_item(next).add_item(previous).add_item(seek_forward).add_item(seek_backward)); 
}

fn download_menu() -> Submenu {
  let android = CustomMenuItem::new("android".to_string(), "Android");
  let ios = CustomMenuItem::new("download_app".to_string(), "IOS");
  let windows = CustomMenuItem::new("download_app".to_string(), "Windows");
  let macos = CustomMenuItem::new("download_app".to_string(), "MacOS");
  let linux = CustomMenuItem::new("download_app".to_string(), "Linux");
  return Submenu::new("Downloads", Menu::new().add_item(android).add_item(ios).add_item(windows).add_item(macos).add_item(linux)); 
}

fn help_menu() -> Submenu {
  let mail_us = CustomMenuItem::new("mail_us".to_string(), "Mail Us");
  let feedback = CustomMenuItem::new("feedback".to_string(), "Feedback");
  let faq = CustomMenuItem::new("faq".to_string(), "FAQ");
  return Submenu::new("Help", Menu::new().add_item(mail_us).add_item(feedback).add_item(faq)); 
}

fn menu_handler(event: WindowMenuEvent) {
  event.window().emit("menu_shortcuts", event.menu_item_id()).unwrap();
}

fn main() {
  let action_menu = Menu::os_default("Zene").add_submenu(action_menu()).add_submenu(player_menu()).add_submenu(shortcuts_menu()).add_submenu(download_menu()).add_submenu(help_menu());
  tauri::Builder::default()
        .menu(action_menu)
        .on_menu_event(menu_handler)
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}



/*
  Add Username to Top Panel GNOME extension

  Inspired from Add Username to Top Panel (https://extensions.gnome.org/extension/813/add-user-and-host-name-to-panel/)

*/
const Clutter = imports.gi.Clutter;
const St = imports.gi.St;
const Main = imports.ui.main;
const GLib = imports.gi.GLib;

let label;
let aggregateMenu;
let children;

function init() {
  label = new St.Label({ text: GLib.get_real_name(), y_align: Clutter.ActorAlign.CENTER, style_class: "username-label" });
  aggregateMenu = Main.panel.statusArea["aggregateMenu"];
  powerIndicator = aggregateMenu._power.indicators;
}

function enable() {
  powerIndicator.add_child(label);
}

function disable() {
  powerIndicator.remove_child(label);
}

import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import * as THREE from "three";
import Data from "./Data/Metaverse.json";
import SocketService from "./Services/Socket";
import Camera from "./Camera";
import EventEmitter from "./Utils/EventEmitter";
import MenuComponent from "./Components/Menu/Menu";
import CookiesService from "./Services/Cookies";
import ChatComponent from "./Components/Chat/Chat";
import ConfiguratorComponent from "./Components/Configurator/Configurator";
import SettingsComponent from "./Components/Settings/Settings";
import Raycaster from "./Utils/Raycaster";
import API from "./Services/Api";
import Endpoints from "./Services/Endpoints";

export const useManager = create(subscribeWithSelector((set) => ({
  canvas: document.querySelector("canvas.webgl"),
  room: Data.setup.initialRoom,
  scene: new THREE.Scene(),
  player: {
    position: new THREE.Vector3(0, 0, 0),
    rotation: new THREE.Vector3(0, 0, 0),
  },
  socket: new SocketService(Data.setup.initialRoom),
  emitter: new EventEmitter(),
  cam: new Camera(document.querySelector("canvas.webgl")),
  cookies: new CookiesService(),
  raycast: new Raycaster(),
  wallet: 0,
  purchased: [],
  ready: false,
  api: API,
  endpoints: Endpoints,

  initComps: () => {
    set({
      menu: new MenuComponent(),
      chat: new ChatComponent(".menu"),
      configurator: new ConfiguratorComponent(),
      settings: new SettingsComponent(),
    });
  },

  setRoom: (data) => set({ room: data }),
  setUser: (data) => set({ user: data }),
  setAvatar: (data) => set({ avatar: data }),
  setWallet: (data) => set({ wallet: data }),
  setPurchased: (data) => set({ purchased: data }),
  setPlayerPosition: (data) => set((state) => ({ player: { ...state.player, position: data } })),
  setReady: (data) => set({ ready: data }),
  getUserData: () => get().user,
})));

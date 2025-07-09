export default {
  expo: {
    name: "Compa",
    slug: "compa",
    owner: "sergiodavidricotorres",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./compa/assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./compa/assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.compa.app",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./compa/assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.sergiodavidricotorres.compa",
    },
    web: {
      favicon: "./compa/assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "ef8e7b09-4f7c-4543-b965-8062d076a3d3",
      },
    },
    scheme: "compa",
    plugins: ["expo-dev-client"],
  },
};

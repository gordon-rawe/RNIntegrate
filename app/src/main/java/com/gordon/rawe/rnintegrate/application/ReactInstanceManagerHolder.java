package com.gordon.rawe.rnintegrate.application;

import android.app.Application;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.shell.MainReactPackage;
import com.gordon.rawe.rnintegrate.BuildConfig;

/**
 * Created by gordon on 2017/2/11.
 */
public class ReactInstanceManagerHolder {
    private static ReactInstanceManagerHolder ourInstance = new ReactInstanceManagerHolder();

    public static ReactInstanceManagerHolder getInstance() {
        return ourInstance;
    }

    private ReactInstanceManagerHolder() {

    }

    public void init(Application application) {
        reactInstanceManager = ReactInstanceManager.builder()
                .setApplication(application)
                .setBundleAssetName("index.android.bundle")
                .setJSMainModuleName("index.android")
                .addPackage(new MainReactPackage())
                .addPackage(new ExtraPackage())
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();
    }

    public ReactInstanceManager reactInstanceManager;

    public ReactInstanceManager getReactInstanceManager() {
        return reactInstanceManager;
    }
}

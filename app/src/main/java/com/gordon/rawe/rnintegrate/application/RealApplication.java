package com.gordon.rawe.rnintegrate.application;

import android.app.Application;

/**
 * Created by gordon on 10/02/2017.
 */

public class RealApplication extends Application /*implements ReactApplication*/ {

   /* private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.asList(
                    new MainReactPackage(), new ExtraPackage()
            );
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }
    */


    @Override
    public void onCreate() {
        super.onCreate();
        ReactInstanceManagerHolder.getInstance().init(this);
    }
}

package com.gordon.rawe.rnintegrate;

import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.provider.Settings;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.view.KeyEvent;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.shell.MainReactPackage;
import com.gordon.rawe.rnintegrate.application.ReactInstanceManagerHolder;

/**
 * Created by gordon on 2017/2/5.
 */

public class RNActivity extends AppCompatActivity implements DefaultHardwareBackBtnHandler {
    private ReactRootView mReactRootView;
    private int OVERLAY_PERMISSION_REQ_CODE = 0x01;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        requestOverlay();
        mReactRootView = new ReactRootView(this);
        mReactRootView.startReactApplication(ReactInstanceManagerHolder.getInstance().getReactInstanceManager(), "router", null);

        setContentView(mReactRootView);
    }

    @Override
    public void invokeDefaultOnBackPressed() {
        super.onBackPressed();
    }

    @Override
    protected void onPause() {
        super.onPause();

        if (ReactInstanceManagerHolder.getInstance().getReactInstanceManager() != null) {
            ReactInstanceManagerHolder.getInstance().getReactInstanceManager().onHostPause(this);
        }
    }

    @Override
    protected void onResume() {
        super.onResume();

        if (ReactInstanceManagerHolder.getInstance().getReactInstanceManager() != null) {
            ReactInstanceManagerHolder.getInstance().getReactInstanceManager().onHostResume(this, this);
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();

        if (ReactInstanceManagerHolder.getInstance().getReactInstanceManager() != null) {
            ReactInstanceManagerHolder.getInstance().getReactInstanceManager().onHostDestroy();
        }
    }

    @Override
    public void onBackPressed() {
        if (ReactInstanceManagerHolder.getInstance().getReactInstanceManager() != null) {
            ReactInstanceManagerHolder.getInstance().getReactInstanceManager().onBackPressed();
        } else {
            super.onBackPressed();
        }
    }

    @Override
    public boolean onKeyUp(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_MENU && ReactInstanceManagerHolder.getInstance().getReactInstanceManager() != null) {
            ReactInstanceManagerHolder.getInstance().getReactInstanceManager().showDevOptionsDialog();
            return true;
        }
        return super.onKeyUp(keyCode, event);
    }

    private void requestOverlay() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            if (!Settings.canDrawOverlays(this)) {
                Intent intent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION,
                        Uri.parse("package:" + getPackageName()));
                startActivityForResult(intent, OVERLAY_PERMISSION_REQ_CODE);
            }
        }
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == OVERLAY_PERMISSION_REQ_CODE) {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                if (!Settings.canDrawOverlays(this)) {
                    // SYSTEM_ALERT_WINDOW permission not granted...
                }
            }
        }
    }
}

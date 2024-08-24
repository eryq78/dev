<?php

namespace Tests\Feature\Filament\Dashboard\Resources;

use App\Constants\TenancyPermissionConstants;
use App\Filament\Dashboard\Resources\OrderResource;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Tests\Feature\FeatureTest;

class OrderResourceTest extends FeatureTest
{
    public function test_list(): void
    {
        $tenant = $this->createTenant();
        $user = $this->createUser($tenant, [
            TenancyPermissionConstants::PERMISSION_VIEW_ORDERS,
        ]);

        $this->actingAs($user);

        $response = $this->get(OrderResource::getUrl('index', [], true, 'dashboard', tenant: $tenant))->assertSuccessful();

        $response->assertStatus(200);
    }

    public function test_list_fails_when_user_has_no_permission(): void
    {
        $tenant = $this->createTenant();
        $user = $this->createUser($tenant);

        $this->actingAs($user);
        $this->expectException(HttpException::class);

        $this->get(OrderResource::getUrl('index', [], true, 'dashboard', tenant: $tenant));
    }
}